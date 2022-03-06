const express = require('express');
const app = express();
const path = require('path');
//to set the view engine
app.set("view engine",'hbs');
//template engine route
app.get("",(req,res)=>{
    res.render("index",{
        NAme:"Sahil"
    });
});
app.get("/",(req,res)=>{
res.send("<h1>hello from the express</h1>");
});
app.get('/about',(req,res)=>{
res.send("<h1>hello i m Sahil Rajput</h1>");
});
app.listen(8000,()=>{
    console.log("listening port at 3000");
});