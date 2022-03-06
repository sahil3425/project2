const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/data",
{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log("done"))
.catch((err)=> console.log("error"));

const playSchema = new mongoose.Schema({
    name:{
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
    
});
const Playlist = new mongoose.model("mydata",playSchema);

//update(filter,value,option) the documents just update
//findByIdAndUpdate also gave u mdified document
const updateDocuments =async (id)=>{
try{
    const result = await Playlist.updateOne({_id : id},{
        $set:{name:"Black Eyes"}
    });
    console.log(result);
}catch(err) {console.log(err);}


}
//deleteOne delete the one document
//if you want to see the deleted document use findByIdAndDelete()
const DeleteDocument =async (_id)=>{
try{
   const result = await Playlist.findByIdAndDelete({_id});
   console.log(result);
}catch(err){

}

}
DeleteDocument("615136b6e7eca3df5c8b1765");