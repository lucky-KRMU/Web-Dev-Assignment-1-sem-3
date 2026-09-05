// this file is to create a simple http server
const { log } = require('console');
const http = require('http');

// creating the server
const server = http.createServer((req, res) => {
    if (req.url === '/'){
        res.writeHead(200, {'content-type': 'text/plain'});
        res.end("Welcome to the Server");
    } else if (req.url === '/about'){
        res.writeHead(200, {'content-type': 'text/plain'});
        res.end("This is About") 
    } else if (req.url === '/contact'){
        res.writeHead(200, {'content-type': 'text/plain'});
        res.end("This is Contact")
    } else {
        res.writeHead(404, {'content-type': 'text/plain'});
        res.end("404 Not Found")
    }
})

// setting port and listening it
const PORT = 1500;
server.listen(PORT, ()=>{
    log("Server has started...")
})