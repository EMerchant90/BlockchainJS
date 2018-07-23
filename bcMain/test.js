var Blockchain = require('./blockchain');

var ejazCoin = new Blockchain();

// var bc1 = {
//
//     "chain": [
//         {
//             "index": 1,
//             "timeStamp": 1532229003882,
//             "transactions": [ ],
//             "nonce": 100,
//             "hash": "0",
//             "previousBlockHash": "0"
//         },
//         {
//             "index": 2,
//             "timeStamp": 1532317015285,
//             "transactions": [ ],
//             "nonce": 18140,
//             "hash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
//             "previousBlockHash": "0"
//         },
//         {
//             "index": 3,
//             "timeStamp": 1532317087080,
//             "transactions": [
//                 {
//                     "amount": 12.5,
//                     "sender": "00",
//                     "recipient": "ba6a0ca08d5c11e8a7b6b909ae59a352",
//                     "transactionID": "a5880bc08e2911e8a7b6b909ae59a352"
//                 },
//                 {
//                     "amount": 90,
//                     "sender": "THESENDER65",
//                     "recipient": "THERECIPIENT3333",
//                     "transactionID": "c2d7dc508e2911e8a7b6b909ae59a352"
//                 },
//                 {
//                     "amount": 20,
//                     "sender": "THESENDER65",
//                     "recipient": "THERECIPIENT3333",
//                     "transactionID": "c74c26608e2911e8a7b6b909ae59a352"
//                 },
//                 {
//                     "amount": 30,
//                     "sender": "THESENDER65",
//                     "recipient": "THERECIPIENT3333",
//                     "transactionID": "ca97cef08e2911e8a7b6b909ae59a352"
//                 }
//             ],
//             "nonce": 119632,
//             "hash": "000056cefd2cd0ff464d55ce6d1c4aa210432af33340134681f4f6d9af06f0de",
//             "previousBlockHash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100"
//         },
//         {
//             "index": 4,
//             "timeStamp": 1532317130542,
//             "transactions": [
//                 {
//                     "amount": 12.5,
//                     "sender": "00",
//                     "recipient": "ba6a0ca08d5c11e8a7b6b909ae59a352",
//                     "transactionID": "d01b18008e2911e8a7b6b909ae59a352"
//                 },
//                 {
//                     "amount": 40,
//                     "sender": "THESENDER65",
//                     "recipient": "THERECIPIENT3333",
//                     "transactionID": "dd85fff08e2911e8a7b6b909ae59a352"
//                 },
//                 {
//                     "amount": 50,
//                     "sender": "THESENDER65",
//                     "recipient": "THERECIPIENT3333",
//                     "transactionID": "e09a92f08e2911e8a7b6b909ae59a352"
//                 },
//                 {
//                     "amount": 60,
//                     "sender": "THESENDER65",
//                     "recipient": "THERECIPIENT3333",
//                     "transactionID": "e35916b08e2911e8a7b6b909ae59a352"
//                 },
//                 {
//                     "amount": 70,
//                     "sender": "THESENDER65",
//                     "recipient": "THERECIPIENT3333",
//                     "transactionID": "e61047708e2911e8a7b6b909ae59a352"
//                 }
//             ],
//             "nonce": 40646,
//             "hash": "0000df3d9a83d2c2bdd5ecab74a0f83d00380b6d2181e8e945f5fca29c868a14",
//             "previousBlockHash": "000056cefd2cd0ff464d55ce6d1c4aa210432af33340134681f4f6d9af06f0de"
//         },
//         {
//             "index": 5,
//             "timeStamp": 1532317142606,
//             "transactions": [
//                 {
//                     "amount": 12.5,
//                     "sender": "00",
//                     "recipient": "ba6a0ca08d5c11e8a7b6b909ae59a352",
//                     "transactionID": "ea021b108e2911e8a7b6b909ae59a352"
//                 }
//             ],
//             "nonce": 13192,
//             "hash": "00008ba7d285d2ca8d9d3f3dbec9b0c8cbf28d77d62c58cedb60390f8e8561a6",
//             "previousBlockHash": "0000df3d9a83d2c2bdd5ecab74a0f83d00380b6d2181e8e945f5fca29c868a14"
//         },
//         {
//             "index": 6,
//             "timeStamp": 1532317147562,
//             "transactions": [
//                 {
//                     "amount": 12.5,
//                     "sender": "00",
//                     "recipient": "ba6a0ca08d5c11e8a7b6b909ae59a352",
//                     "transactionID": "f1307c108e2911e8a7b6b909ae59a352"
//                 }
//             ],
//             "nonce": 149986,
//             "hash": "00002af05eb9df26e081b8ecbef545fccb137ce2e20a81cd6329c86fa89e0e3b",
//             "previousBlockHash": "00008ba7d285d2ca8d9d3f3dbec9b0c8cbf28d77d62c58cedb60390f8e8561a6"
//         }
//     ],
//     "pendingTransactions": [
//         {
//             "amount": 12.5,
//             "sender": "00",
//             "recipient": "ba6a0ca08d5c11e8a7b6b909ae59a352",
//             "transactionID": "f42552108e2911e8a7b6b909ae59a352"
//         }
//     ],
//     "currentNodeURL": "http://localhost:3001",
//     "networkNodes": [ ]
//
// };
//
//
//
//
//
// console.log('VALID: ', ejazCoin.chainIsValid(bc1.chain));




// console.log(ejazCoin);

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
