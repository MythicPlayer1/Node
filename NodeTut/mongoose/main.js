const express= require('express');
const app= express();

app.get('/', (req,resp)=>{
    resp.send('Done')
})

app.listen(1701);