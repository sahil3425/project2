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
//for greater then  .find({age:{$gt:19}} less than $lt for either or $in for neither nor $nin

const Playlist = new mongoose.model("mydata",playSchema);
const getDocument = async () =>{
    // const result=await Playlist.find({views:{$gt:35}});
    const result=await Playlist.find({songtype:{$in:["Rock","pop"]}});
    console.log("Result => ",result);
    }
    getDocument();
    

