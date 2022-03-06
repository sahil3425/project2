const mongoose = require('mongoose');
//connection creation
mongoose.connect("mongodb://localhost:27017/MyDataBase",
{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log("done"))
.catch((err)=> console.log("error"));

//schema
//A mongoose schema defines the structure of the document,
//default values,validators,etc.
const playSchema = new mongoose.Schema({
    name:{//compolsary
        type:String,
        required:true},
    songtype:String,
    author:String,
    active:Boolean,
    date:{
        type:Date,
        default:Date.now
    }
})
//A Mongoose model is a wrapper on the Mongoose schema . 
//A Mongoose Schema defines the sturucturee of the document,
//default values , validators,etc.,whereas a Mongoose model 
//provides an interface to the database for creating,querying,updating,deleting records,etc.

const Playlist = new mongoose.model("Playlist",playSchema);

//Read document
const getDocument = async () =>{
const result=await Playlist.find();//show all the document
// const result=await Playlist.find({author:"Arjit Singh"}).select({name:1}); show name of arjit singh document
console.log("Result => ",result);
}
getDocument();
