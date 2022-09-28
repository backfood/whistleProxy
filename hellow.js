var http = require('http');
http.createServer(function (request, response) {
    response.writeHead(
        200,
        {
            'Content-Type': 'text/plain'
        });
    response.end('Hello World\n');
}).listen(8080);
console.log('Server started');



function returnLine() {

    let a = 1, b = 2, c = 3
    return a
        + b
        + c
}
let a = returnLine()
console.log(a)