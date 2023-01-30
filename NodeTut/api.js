const express = require('express')
const dbConnect= require('./dbConnection')

const app= express();
app.use(express.json());

// creating basic api 
app.get('/',async (req,resp)=>{
    let data= await dbConnect();
    data= await data.find().toArray();
    resp.send(data)
})

app.post('/', (req,resp)=>{
    console.log(req.body);
    resp.send({name:'monika'})
})


app.listen(6700)
