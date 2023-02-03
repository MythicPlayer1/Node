const express= require('express')
const multer = require('multer')

const app= express();

const uploadfile=multer({
    storage:multer.diskStorage({
        destination:function(req,file,cb){
            cb(null,"uploads")
        },
        filename:function(req, file, cb){
            cb(null,file.fieldname+"-"+Date.now()+".jpg")// by default jpg extention use gareko
        }
    })
}

).single("user_file")// it asks file ko kun parameter le upload garen ho vanera
app.post('/',uploadfile,(req, resp)=>{
    resp.send('file upload')
})

app.listen(5600);