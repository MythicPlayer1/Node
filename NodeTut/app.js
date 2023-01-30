//  const {MongoClient}=require("mongodb") //const mongoDb= require('mongodb').MongoClient
 const dbconnect = require('./dbConnection')
//  const url='mongodb://localhost:27017';//localhost use garne kii online wala use garne vanera esma define garne also this define path of mongodb
//  const client= new MongoClient(url);
//  const database = 'e-comm';

//    async function getdata() {
//     let result = await client.connect();
//     let db = result.db(database);
//     return db.collection('Products');
    

//}

 const main= async ()=>{
   let  data=await dbconnect();
   data= await data.find().toArray();
    console.warn(data)
 }
 main();


