
import mongoose from 'mongoose';

const productScheme = new mongoose.Schema({
    name:String,
    price:String,
    category:String,
    userId:{
        type:mongoose.Types.ObjectId,
        ref:"users"
    },
    company:String
});


export default mongoose.model('products', productScheme);