const fs= require('fs')
const EventEmitter=require('events');

// fs.readdir('./f',(err,file)=>{
//     if (err) {
//         console.log(err)
//     } else {console.log(`result is [${file}]`)}
// })

const emmiter=new EventEmitter()
// Register a listener
emmiter.on('messageLogged',()=>console.log('Listener called'))
// Raise an event
emmiter.emit('messageLogged')
// NOTE: you have to register the listener before calling the emit method,if not,nothing will happen.

