var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var Blockchain = require('./blockchain');
var uuid = require('uuid/v1');
var port = process.argv[2];
var rp = require('request-promise');

var nodeAddress = uuid().split('-').join('');
var ejazcoin = new Blockchain();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// get entire blockchain
app.get('/blockchain', function (req, res) {
  res.send(ejazcoin);
  //res.send('Want some ejazCoin?')
});

// create a new transaction
app.post('/transaction', function (req, res) {
  var newTransaction = req.body;
  var blockIndex = ejazcoin.addTransactionToPendingTransactions(newTransaction);
  res.json({ note: `Transaction will be added in block ${blockIndex}.` });
  // var blockIndex = ejazcoin.createNewTransaction(req.body.amount, req.body.sender, req.body.recipient);
  // res.json({ note: `Transaction will be added in block ${blockIndex}.` });
  // console.log(req.body);
  // res.send(`The amount of transaction is ${req.body.amount} ejazCoin.`);
});

app.post('/transaction/broadcast', function(req, res) {
  var newTransaction = ejazcoin.createNewTransaction(req.body.amount, req.body.sender, req.body.recipient);
  ejazcoin.addTransactionToPendingTransactions(newTransaction);

  var requestPromises = [];
  ejazcoin.networkNodes.forEach(networkNodeUrl => {
    var requestOptions = {
      uri: networkNodeUrl + '/transaction',
      method: 'POST',
      body: newTransaction,
      json: true
    };

    requestPromises.push(rp(requestOptions));
  });

  Promise.all(requestPromises)
  .then(data => {
    res.json({ note: 'Transaction created and broadcast successfully.' });
  });
});

// mine a block
app.get('/mine', function (req, res) {
  var lastBlock = ejazcoin.getLastBlock();
  var previousBlockHash = lastBlock['hash'];
  var currentBlockData = {
    transactions: ejazcoin.pendingTransactions,
    index: lastBlock['index'] + 1
  };
  var nonce = ejazcoin.proofOfWork(previousBlockHash, currentBlockData);
  var blockHash = ejazcoin.hashBlock(previousBlockHash, currentBlockData, nonce);
  var newBlock = ejazcoin.createBlock(nonce, previousBlockHash, blockHash);

  var requestPromises = [];
  ejazcoin.networkNodes.forEach(networkNodeUrl => {
    var requestOptions = {
      uri: networkNodeUrl + '/receive_new_block',
      method: 'POST',
      body: { newBlock: newBlock },
      json: true
    };

    requestPromises.push(rp(requestOptions));
  });

  Promise.all(requestPromises)
  .then(data => {
    var requestOptions = {
      uri: ejazcoin.currentNodeURL + '/transaction/broadcast',
      method: 'POST',
      body: {
        amount: 12.5,
        sender: "00",
        recipient: nodeAddress
      },
      json: true
    };

    return rp(requestOptions);
  })
  .then(data => {
    res.json({
      note: "New block mined & broadcast successfully",
      block: newBlock
    });
  });
});


app.post('/receive_new_block', function (req, res) {
  var newBlock = req.body.newBlock;
  var lastBlock = ejazcoin.getLastBlock();
  var correctHash = lastBlock.hash === newBlock.previousBlockHash;
  var correctIndex = lastBlock['index'] + 1 === newBlock['index'];

  if (correctHash && correctIndex) {
    ejazcoin.chain.push(newBlock);
    ejazcoin.pendingTransactions = [];
    res.json({
      note: 'New block received and accepted.',
      newBlock: newBlock
    });
  } else {
    res.json({
      note: 'New block rejected.',
      newBlock: newBlock
    });
  }
});


// register a node and broadcast it to the network
app.post('/register_and_broadcast_node', function(req, res) {
  var newNodeURL = req.body.newNodeURL;
  if (ejazcoin.networkNodes.indexOf(newNodeURL) == -1) ejazcoin.networkNodes.push(newNodeURL);

  var registerNodesPromises = [];
  ejazcoin.networkNodes.forEach(networkNodeUrl => {
    var requestOptions = {
      uri: networkNodeUrl + '/register_node',
      method: 'POST',
      body: { newNodeURL: newNodeURL },
      json: true
    };


    registerNodesPromises.push(rp(requestOptions));
  });

  Promise.all(registerNodesPromises)
  .then(data => {
    var bulkRegOptions = {
      uri: newNodeURL + '/register_nodes_bulk',
      method: 'POST',
      body: { allNetWorkNodes: [ ...ejazcoin.networkNodes, ejazcoin.currentNodeURL ] },
      json: true
    };

    return rp(bulkRegOptions);
  })
  .then(data => {
    res.json({ note: 'New node registered with network successfully.' });
  });
});

// register a node with the network
app.post('/register_node', function(req, res) {
  var newNodeURL = req.body.newNodeURL;
  var nodeNotAlreadyPresent = ejazcoin.networkNodes.indexOf(newNodeURL) == -1;
  var notCurrentNode = ejazcoin.currentNodeURL !== newNodeURL;
  if (nodeNotAlreadyPresent && notCurrentNode) ejazcoin.networkNodes.push(newNodeURL);
  res.json({ note: 'New node registered successfully.' });
});


// register multiple nodes at once
app.post('/register_nodes_bulk', function(req, res) {
  var allNetWorkNodes = req.body.allNetWorkNodes;
  allNetWorkNodes.forEach(networkNodeUrl => {
      var nodeNotAlreadyPresent = ejazcoin.networkNodes.indexOf(networkNodeUrl) == -1;
      var notCurrentNode = ejazcoin.currentNodeURL !== networkNodeUrl;
      if (nodeNotAlreadyPresent && notCurrentNode) ejazcoin.networkNodes.push(networkNodeUrl);
  });

  res.json ({ note: 'Bulk registration successful.' });
});






app.listen(port, function() {
  console.log(`Listening on port ${port}....`);
});
