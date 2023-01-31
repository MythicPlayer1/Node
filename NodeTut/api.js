const express = require('express')
const dbConnect= require('./dbConnection')
const mongoDB= require('mongodb')

const app= express();
app.use(express.json());

// creating basic api 
app.get('/',async (req,resp)=>{
    let data= await dbConnect();
    data= await data.find().toArray();
    resp.send(data)
})

app.post('/', async (req,resp)=>{
    console.log(req.body);
    let db= await dbConnect();
    let result = await db.insert(req.body);
    resp.send(result)
})

app.put('/',async(req,resp)=>{
    let db=await dbConnect();
    let result=await db.updateOne(
        {name:req.body.name},
        {$set:req.body}
    )
    resp.send(result)
})

app.delete('/:id',async (req,resp)=>{
    console.log(req.params.id)
    let db= await dbConnect();
    let result=await db.deleteOne({_id:new mongoDB.ObjectId( req.params.id)}) //ID related with the object so we use package provided monogoDb
    resp.send(result)

})


app.listen(6700)
