const http = require('http');
const fs = require('fs');
const port = 8000;

http.createServer((request, response) => {
  fs.readFile('index.html', (error, data) => {
    if (error) {
      response.writeHead(404, {'Content-Type': 'text/plain'});
      response.write('404 Not Found');
    } else {
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(data);
    }
    response.end();
  });
}).listen(port);

console.log(`Server running at http://localhost:${port}/`);
