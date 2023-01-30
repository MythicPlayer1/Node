

module.exports = reqFilter=(req,resp,next)=>{
    if(!req.query.age){
        resp.send('Pleaser provide your age')
    }
    else if(req.query.age<18){
        resp.send('Your age should be greater than 18')
    }
    else{
        next();
    }


};