// Create web server
// 1. Start the server
// 2. Listen for requests
// 3. Handle requests
// 4. Send response
// 5. Close the server

const http = require('http');
const fs = require('fs');
const url = require('url');

// Create a server
const server = http.createServer((req, res) => {
  const path = url.parse(req.url).pathname;
  console.log(path);

  if (path === '/comments') {
    fs.readFile('comments.json', (err, data) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.write('Not Found');
        res.end();
      } else {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(data);
        res.end();
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.write('Not Found');
    res.end();
  }
});

// Start the server
server.listen(3000, 'localhost', () => {
  console.log('Server is listening on port 3000');
});

// Handle requests
// Send response
// Close the server