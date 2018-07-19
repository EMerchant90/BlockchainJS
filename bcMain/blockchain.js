// Bring in dependency of hash - sha256
var sha256 = require('sha256');

function Blockchain() {
  // All blocks will be stored here
  this.chain = [];
  // Will hold all transctions before going into blocks
  this.pendingTransactions = [];

  this.createBlock(100, '0', '0');
};


// Create new block method
Blockchain.prototype.createBlock = function(nonce, previousBlockHash, hash) {
  // Creates block
  var newBlock = {
    index: this.chain.length + 1,
    timeStamp: Date.now(),
    transactions: this.pendingTransactions,
    nonce: nonce,
    hash: hash,
    previousBlockHash: previousBlockHash
  };

  // Clears out new transactions
  this.pendingTransactions = [];
  // Pushes new block into chain
  this.chain.push(newBlock);

  return newBlock;
}

Blockchain.prototype.getLastBlock = function() {
  return this.chain[this.chain.length - 1];
}

// Create a new method to create a new transaction
Blockchain.prototype.createNewTransaction = function(amount, sender, recipient) {
  // Create trans object
  var newTransaction = {
    amount: amount,
    sender: sender,
    recipient: recipient
  };

  // Push new transactions to pending transactions
  this.pendingTransactions.push(newTransaction);
  // Returns the index of new transaction
  return this.getLastBlock()['index'] + 1;
}

// Creating a sha256 from library/dependency
Blockchain.prototype.hashBlock = function(previousBlockHash, currentBlockData, nonce) {
  var dataAsString = previousBlockHash + nonce.toString() + JSON.stringify(currentBlockData);
  var hash = sha256(dataAsString);

  return hash;
}

// ejazCoin.hashBlock(previousBlockHash, currentBlockData, nonce);
// => Repeat hash blocks until it finds correct hash => '0000xxxxxxxx'
// => Uses current block data for the hash, but also the previousBlockHash
// => Continously changes nonce value until it finds correct hash
// => Returns to us the nonce value that creates the correct hash
Blockchain.prototype.proofOfWork = function(previousBlockHash, currentBlockData) {
  var nonce = 0;
  var hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);

  // While loop to find nonce with 0000 start
  while (hash.substring(0, 4) !== '0000') {
    nonce++;
    hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
    // console.log(hash);
  }

  return nonce;
}


module.exports = Blockchain;
