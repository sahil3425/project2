const fs = require('fs');
const biodata={
    name:"Sahil",
    age:19,
}
// console.log(biodata.name);
// console.log(biodata.age);
// const JsonData=JSON.stringify(biodata);//convert in to Json data
// console.log(JsonData);
// const ObjectData=JSON.parse(JsonData);
// console.log(ObjectData);

//task
//convert in to JSON
//Add in new file
//read that file
//convert back to js object
//console.log
const JsonData=JSON.stringify(biodata);
// fs.writeFile('json1.json',JsonData,()=>{
//     console.log("comlete");
// })
fs.readFile("json1.json","utf-8",(err,data)=>{
//    console.log(data)
const objectData=JSON.parse(data);
console.log(objectData);

}
   );