var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var Blockchain = require('./blockchain');
var uuid = require('uuid/v1');

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
  var blockIndex = ejazcoin.createNewTransaction(req.body.amount, req.body.sender, req.body.recipient);
  res.json({ note: `Transaction will be added in block ${blockIndex}.`});
  // console.log(req.body);
  // res.send(`The amount of transaction is ${req.body.amount} ejazCoin.`);
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

  ejazcoin.createNewTransaction(18, "00", nodeAddress);

  var newBlock = ejazcoin.createBlock(nonce, previousBlockHash, blockHash);

  res.json({
    note: "New block mined successfully",
    block: newBlock
  });
});

app.listen(3000, function() {
  console.log('Listening on port 3000....');
});
