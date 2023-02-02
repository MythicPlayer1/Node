const mongoose= require('mongoose');


const main= async ()=>{
    mongoose.set('strictQuery',true);

    await mongoose.connect('mongodb://127.0.0.1:27017/e-comm');
   
//    await  mongoose.connect('mongodb://localhost:27017/e-comm');
   const productSchema= new mongoose.Schema({
    name:String,
    brand:String,
    price:Number,
    category:String
   })

  const productModel= mongoose.model('Products', productSchema);


   let data=  productModel({name:'Oh..... ', brand:'female ', price:90000000000000,category:'feminist'})
   
   let result=await  data.save();
   console.log(result)
}
main();