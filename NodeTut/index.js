const path = require('path' )
const express = require('express')

const app= express();
app.set('view engine','ejs');

const publicpath=path.join(__dirname,'public');
//app.use(express.static(publicpath))......this to render only static page in old fashion way

app.get('/',(req,resp)=>{
    resp.sendFile(`${publicpath}/home.html`)
})
app.get('/help',(req,resp)=>{
    resp.sendFile(`${publicpath}/help.html`)
})
app.get('/about',(req,resp)=>{
    resp.sendFile(`${publicpath}/about.html`)
})



app.get('/profile',(req,resp)=>{
    const userData={
        name:'Ashish',
        email:'ashishrai@gamil.com',
        city:'Malebourne ',
        skills:['php','python','c','c++','mongoDB']
    }
    resp.render('profiles',{userData})
})
app.get('*',(req,resp)=>{
    resp.sendFile(`${publicpath}/404.html`)
})//note this should always set at last part of the file



app.listen(3005);

