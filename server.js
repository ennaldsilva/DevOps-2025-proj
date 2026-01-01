



const http = require('http');
const hostname = '0.0.0.0';
const port = 3000; // Porta interna do container

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');


  res.end('Ola Mundo - DevOps 2025 \n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
