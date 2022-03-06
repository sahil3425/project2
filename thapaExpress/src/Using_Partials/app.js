const express = require('express');
const app = express();
const path = require('path');
const hbs = require("hbs");
const requests = require('requests');
const PartialPath = path.join(__dirname,'../Using_Partials/partials');
//to set the view engine
app.set("view engine",'hbs');
const city = "sirsa";
hbs.registerPartials(PartialPath)
//template engine route
app.get("",(req,res)=>{
res.render("index",{
    NAme:"Sahil"
});
});

app.get('/about',(req,res)=>{
   
    requests(
        `http://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&units=metric&appid=96a7529f55593aee0ce0a392aad5e9d7`
        )
          .on("data", (chunk) => {
            const objdata = JSON.parse(chunk);
            const arrData = [objdata];
           console.log(`city name is ${arrData[0].name} and temperature is ${arrData[0].main.temp}`);
            res.write(arrData[0].name);
            // console.log(realTimeData);
          })
          .on("end", (err) => {
            if (err) return console.log("connection closed due to errors", err);
            res.end();
          });
});
app.get("/",(req,res)=>{
    res.send("<h1>hello from the express</h1>");
    });
    app.get('*',(req,res)=>{
        console.log(req.query);

        res.render('error',{
            error:"Page not found"
        });
    })
app.listen(8000,()=>{
    console.log("listening port at 8000");
});