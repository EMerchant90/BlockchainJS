var Blockchain = require('./blockchain');

var ejazCoin = new Blockchain();

console.log(ejazCoin);

// const previousBlockHash = 'ASDASD232JHDSA22';
// const currentBlockData = [
//   {
//     amount: 101,
//     sender: 'SAJF929QJWS',
//     recipient: 'RECHA7DGWQY32432HDFSH'
//   },
//   {
//     amount: 102,
//     sender: 'HGHJSH2312',
//     recipient: 'SUAHDU4353AHSDU435345'
//   },
//   {
//     amount: 103,
//     sender: '7YGSA78E2HJ',
//     recipient: 'DLKSAHIULAY32432HDFSH'
//   }
// ];

//console.log(ejazCoin.hashBlock(previousBlockHash, currentBlockData, 44635));

//console.log(ejazCoin.proofOfWork(previousBlockHash, currentBlockData));

//const nonce = 100;

//console.log(ejazCoin.hashBlock(previousBlockHash, currentBlockData, nonce));










// Sample blocks and transactions
// ejazCoin.createBlock(84328, 'QWRVBDEW1221', 'test');
// ejazCoin.createNewTransaction(100, 'sender_address', 'recipient_address');
// ejazCoin.createBlock(098097, 'hgfghfgjh', '56456456');
// ejazCoin.createNewTransaction(100, 'sender_address', 'recipient_address');
// ejazCoin.createNewTransaction(100, 'sender_address', 'recipient_address');
// ejazCoin.createNewTransaction(100, 'sender_address', 'recipient_address');
// ejazCoin.createBlock(098097, 'hgfghfgjh', '56456456');

// Sample blocks
// ejazCoin.createBlock(8110, 'this is first block', 'GDSH4E343HH');
// ejazCoin.createBlock(8111, 'GDSH4E343HH', '342Y34DFGDF');
// ejazCoin.createBlock(8112, '342Y34DFGDF', 'JUTDJYD3335');

//console.log(ejazCoin.chain[2]);
