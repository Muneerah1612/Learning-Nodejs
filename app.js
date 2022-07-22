const http=require('http')
const server=http.createServer(
(req,res)=>{
    if(req.url=='/'){
        res.write("hello");
        res.end()
    }
    if (req.url=='/api/versions'){
        res.write(JSON.stringify([1,2,3,4]));
        res.end()
    }
}

)
// http module inherits from the eventemitter class, so you can register a listener
server.on('connection',(socket)=>console.log('Connection made'))

// listen
server.listen(3000)

console.log("Listening at 3000")

// We are not going to be using the http module to write our backend application because we will keep 
// passing the routes as conditional statements and our code will get more complex,
// instead,we use the EXPRESS framework, which calls the http function underneath.


