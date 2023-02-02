const mongoose = require('mongoose');

const schemas= mongoose.Schema(
    {
        name: String,
        brand: String,
        price: Number, 
        category: String,
    }
)
module.exports=  mongoose.model('mobiles',schemas);