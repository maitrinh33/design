// server.js
const http = require('http');
const fs = require('fs');
const path = require('path');
const { handleRequest } = require('./controllers/weatherController');
// Create server
const server = http.createServer((req, res) => {
  // Serve HTML for the frontend
  if (req.url === '/' && req.method === 'GET') {
    fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
      if (err) {
        res.writeHead(500);
        res.end('Server Error');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(content);
      }
    });
  } else {
    handleRequest(req, res);
  }
});

// Start Server
const PORT = 3000;
server.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
