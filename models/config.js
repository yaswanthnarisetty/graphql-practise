
import mongoose from 'mongoose';

export const mon = mongoose.connect('mongodb://127.0.0.1:27017/cruddb',{useNewUrlParser:true}).then(()=>{
    console.log("connected")
}).catch(err =>{
    console.log(err)
});




// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://127.0.0.1:27017/cruddb";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   console.log("Database created!");
//   db.close();
// });




export default mon;

