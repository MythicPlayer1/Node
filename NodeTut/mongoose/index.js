const express= require('express');
// connecction of mongoose and sechemas
const schemas= require('./schemas');
const dbconnect=require('./config');
const app= express();

app.use(express.json());

app.post('/',async (req, resp)=>{
  
    let datas= new schemas(req.body);
    let result= await datas.save();
    console.log(result)
    resp.send(result);
})
app.get('/',async (req, resp)=>{
    let datas=await  schemas.find();
    console.log(datas)
    resp.send(datas)

})
app.delete('/:_id',async (req, resp)=>{
    console.log(req.params);
    let data= await schemas.deleteOne(req.params)
    resp.send(data)
})

app.put('/',async(req, resp)=>{
    console.log(req.body);
    let data = await schemas.updateOne(
        {name:req.body.name},
        {
            $set:req.body
        }
    )
    resp.send(data)
    

    
})

app.listen(4950);