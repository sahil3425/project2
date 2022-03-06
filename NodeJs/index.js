// console.log("Welcome in Node js 😄");
//Prerequisites
//REPL : very usefull in experimenting with nodejs and to debug javascript codes(Read,Eval,Print,Loop)
//REPL
// 1: js Expression 
// 2: use varibles 
// 3: Multiline code 
// 4: use (_) to get the last result 
// 5: we can use editor mode

//Core Module
//Consider modules to be the same as javascript libraries.A set of fun you want to include in your application.
//Node .js has a set of built modules which you can use without any further installation.
// const fs=require("fs");
// fs.writeFileSync('read.txt','welcome to Node ');
// fs.appendFileSync('read.txt','sahil')
// console.log(fs.readFileSync('read.txt').toString());
//to rename
// fs.renameSync('read.txt','readWrite.txt');

//CRUD Operation
//1: Create a folder named it 
//2: Create a file in it named bio.txt and data into it.
//3: Add more data into the file at the nd of the existing data.
//4: Read the data without getting the buffer data at first(file encoding).
//5: Rename the file name to mybio.txt
//6: now delete both the file and the folder

// const fs = require('fs');
// fs.mkdirSync('Sahil');
// fs.writeFileSync("Sahil/bio.txt","my name is sahil");
// fs.appendFileSync('Sahil/bio.txt'," rajput");
// const data=fs.readFileSync("Sahil/bio.txt","utf-8");
// console.log(data);
// fs.renameSync('Sahil/bio.txt',"Sahil/myBio.txt");
// fs.unlinkSync('Sahil/myBio.txt');
// fs.rmdirSync('Sahil');


//Asynch : file system
// const fs = require("fs")
// fs.writeFile('read.txt','today is awesome day',
// (err)=>{
// console.log("completed");
// });
// fs.appendFile('read.txt'," i m Sahil Rajput",(err)=>{
//     console.log("done");
// })
// fs.readFile('read.txt',"utf-8",(err,data)=>{
// console.log("error : "+err+" data : "+data);
// })



//Synch vs Asynch
//Synch (it will waist to complete its primary request whether it take more time)
// const fs=require('fs');
// fs.writeFileSync('read.txt',"sahil");
// const data = fs.readFileSync('read.txt',"utf-8");
// console.log(data);//print first
// console.log("complete");//print secound

//Async
// fs.readFile('read.txt','utf-8',(err,data)=>{
//     console.log(data);//print last becouse run time greater the log condition
// });
// console.log("after the data");//run first because run time is less then others



//Challege 2  : CRUD(Asynch)
// const fs = require('fs');
// fs.mkdir('Sahil',(err)=>{
//     console.log('completed');
//     });
// fs.writeFile('Sahil/bio.txt',"My name is Sahil",(err)=>{
// console.log('completed');
// });
// fs.appendFile('Sahil/bio.txt',' Rajput',(err)=>{
//     console.log('completed');
//     });
//   fs.readFile('Sahil/bio.txt','utf-8',(err,data)=>{
//     console.log(data);
//     })
// fs.rename('Sahil/bio.txt','Sahil/myBio.txt',(err)=>{
//     console.log('file rename');
//     })
// fs.unlink('Sahil/myBio.txt',(err)=>{
//     console.log('file removed');
//     })
// fs.rmdir('Sahil',(err)=>{
//     console.log('folder removed');
//     })



//OS Module to get operating system
const os = require('os');
// console.log(os.arch());//x64(64-bit)
// const freemmry = os.freemem();
// // console.log(freemmry); //come in bits
// // console.log(freemmry/1024/1024/1024); //come in gb
// const totalmmry = os.totalmem();
// console.log(totalmmry/1024/1024/1024);
// console.log(os.hostname());//Host name (desktop name)
// console.log(os.platform());//win32(window name not means 32 bit)
// console.log(os.tmpdir());//path of temp dir
// console.log(os.type());//Windows_NT



//Path Module in Node.js