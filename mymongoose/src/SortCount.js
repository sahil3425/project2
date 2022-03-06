const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/data",
{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log("done"))
.catch((err)=> console.log("error"));

const playSchema = new mongoose.Schema({
    name:{//compolsary
        type:String,
        required:true
         },
    songtype:String,
    author:String,
    active:Boolean,
    views:Number,
    date:{
        type:Date,
        default:Date.now
    },
    
})
//countDocumrnts() => gave the no. of matched results
//sort(field,value)  => value = 1 for(A to Z) , value = -1 for (Z to A)
const Playlist = new mongoose.model("mydata",playSchema);
const getDocument = async () =>{
    const result=await Playlist.find({$or :[{songtype:"pop"},{author:"Honey Singh"}]}).select({name:1}).sort({name:1});
    console.log("Result => ",result);
    }
    getDocument();
