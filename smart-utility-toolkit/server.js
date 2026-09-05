// this file is to create a simple http server
const { log } = require('console');
const http = require('http');

// creating the server
const server = http.createServer((req, res) => {
    if (req.url === '/'){
        res.writeHead(200, {'content-type': 'text/plain'});
        res.end("<h1>Hello World!</h1>");
        log("Heard");
    }
})

const PORT = 1500;
server.listen(PORT, ()=>{
    log("Server has started...")
})