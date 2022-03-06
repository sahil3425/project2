//Node.js has built-in module called Events
//where you can create,fire-,and listen for your own master,
//Ex-1-Registering for the event to be fired only one time using one
//Ex-2 Create an event emitter instance and register a couple of callbacks.
//Ex-3 Register for the event with callack parameters

const EventEmitter = require("events");
const event = new EventEmitter();
// event.on('hey',()=>{
//     console.log("your name is \nsahil");
// })
// event.on('hey',()=>{
//     console.log("rajput");
// })
event.on('hey',(sc,msg)=>{
    console.log(`status ${sc} ${msg}`);
})

event.emit('hey',200,"ok");

