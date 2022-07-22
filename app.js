const fs= require('fs')

const Logger=require('./logger')

// fs.readdir('./f',(err,file)=>{
//     if (err) {
//         console.log(err)
//     } else {console.log(`result is [${file}]`)}
// })

const logger = new Logger()
// Register a listener
logger.on('messageLogged',(arg)=>console.log('Listener called',arg))
// // Raise an event
// emmiter.emit('messageLogged',{id:1,url:'http//'})
// // NOTE: you have to register the listener before calling the emit method,if not,nothing will happen.
// emmiter.on('Logging',(arg)=>console.log(arg))
// emmiter.emit('Logging',{data:'Logging a message'})
logger.log('Hello people');

