const EventEmitter=require('events');


// console.log(__filename)
// console.log(__dirname)
// let url='http://mylogger.io/login'

class Logger extends EventEmitter {
    // constructor {}
    log(message){
        console.log(message)
        // Raise an event
        this.emit('messageLogged',{id:1,url:'http//'})
    
    };
    

}

// const log =(message) => {
//     console.log(message)
//     // Raise an event
//     emmiter.emit('messageLogged',{id:1,url:'http//'})

// };

module.exports=Logger
