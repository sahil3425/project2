const express = require("express");
require(`../src/db/conn`);
const app = express();
const port = process.env.PORT || 3000;
app.get("/",async(req,res)=>{
    res.send("Hey Sahil");
})
app.listen(port,()=>{
    console.log(`connection is live at port no. ${port}`);
})