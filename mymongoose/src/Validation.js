const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/data",
{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log("done"))
.catch((err)=> console.log("error"));

//unique:true,
//lowercase:true
//trim:true , remove the trailing space
//minlength:[value,"minimum 2letters"] or maxlength:value (only work on string) for restrict on length
// enum for number length enum:["frontend","backend","database"]

const playSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
       unique:true,//should be unique
        lowercase:true //if you want add data in lowercase
         },
    songtype:String,
    author:String,
    active:Boolean,
    views:Number,
    date:{
        type:Date,
        default:Date.now
    },
    
});
const Playlist = new mongoose.model("mydata",playSchema);
