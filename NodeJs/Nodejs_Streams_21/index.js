//streaming are object that let you data from a source a write data to a destination in continue fashion. in Nodejs , ther are four types of streams
//stream means watching movies and listening songs in real time,instead of downloaded it
//(Readable,Writable,Duplex(read+write),Transform)
const fs = require('fs');
const http=require("http");
const server = http.createServer();
server.on('request',(req,res)=>{
// fs.readFile('input.txt',(err,data)=>{//1st way
//     if(err) return console.error(err);
//     res.end(`<h1>${data.toString()}</h1>`,{"content":"text/html"});
// })
//2nd way
// const rstream = fs.createReadStream('input.txt');
// rstream.on('data',(chuckData)=>{
// // res.end(`<h1>${chuckData}</h1>`);
// res.write(`<h1>${chuckData}</h1>`);
// });
// rstream.on('end',()=>{
//     res.end();
// });
// rstream.on('error',(err)=>{
//     console.log(err);
//     rs.end("file not found")
// })

//.pipe() use to take readable stream and convert in to writable string
//3rd way

const rstream = fs.createReadStream("input.txt");
rstream.pipe(res);
});
server.listen(8000,"127.0.0.1");