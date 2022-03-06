const express = require('express');
const app = express();
const path = require('path');
const templatePath = path.join(__dirname,'../Template_Engine/Template')
//to set the view engine
app.set("view engine",'hbs');
app.set('views',templatePath);
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
res.render('about');
});
app.listen(8000,()=>{
    console.log("listening port at 3000");
});