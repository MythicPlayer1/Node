const express= require('express');
const app= express();
const reqfilter=require('./middleware')
const route=express.Router();

// const reqFilter=(req,resp,next)=>{
//     if(!req.query.age){
//         resp.send("Plese provide your age to enter this website")
//     }
//     else if(req.query.age<18){
//         resp.send('You are not allowed to 18+ content page')
//     }
//     else{
//         next();
//     }

// };
//app.use(reqfilter);
route.use(reqfilter)
app.get('',reqfilter,(req,resp)=>{  //single routed page 
    resp.send('Welcome to the homepage')
})
app.get('/user',(req,resp)=>{
    resp.send('Welcome to the user page')
})
route.get('/about',(req,resp)=>{
    resp.send('Welcome to the about page')
})
route.get('/login',(req,resp)=>{
    resp.send('Welcome to the login page')
})
app.use('/',route)


app.listen(8500);