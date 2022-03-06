const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/data",
{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log("done"))
.catch((err)=> console.log("error"));

const playSchema = new mongoose.Schema({
    name:{//compolsary
        type:String,
        required:true},
    songtype:String,
    author:String,
    active:Boolean,
    views:Number,
    date:{
        type:Date,
        default:Date.now
    },
    
})

//for using or use $or , for using and use $and

const Playlist = new mongoose.model("mydata",playSchema);
const getDocument = async () =>{
    const result=await Playlist.find({$and :[{songtype:"pop"},{author:"Honey Singh"}]});
    console.log("Result => ",result);
    }
    getDocument();
