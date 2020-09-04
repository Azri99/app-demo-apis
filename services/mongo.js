// const {MongoClient, Cursor} = require('mongodb');

// const CONNECTION_STRING = `mongodb://127.0.0.1:27017/`;
// const DB_NAME = `august11`;

// const client = new MongoClient(CONNECTION_STRING,  { useUnifiedTopology: true });


// const connect = async () =>{
//     await client.connect();
// }
// connect();

// const getTesting = async ()=>{
//     const db  = client.db(DB_NAME);
//     const collection = db.collection('testing');
//     const result = await collection.find();
//     return await result.toArray();
// }

// module.exports = {
//     getTesting
// };
