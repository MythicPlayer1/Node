
//connection of mongoose with the datebase
const mongoose = require('mongoose');
mongoose.set('strictQuery',true);
mongoose.connect("mongodb://localhost:27017/e-comm");




