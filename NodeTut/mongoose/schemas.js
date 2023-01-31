const mongoose = require('mongoose')
const { stringify } = require('nodemon/lib/utils')
const schemas= mongoose.Schema(
    {
        name: String,
        brand: String,
        price: Number, 
        category: String,
    }


)
module.exports=  mongoose.model('Products',schemas);