// controllers/weatherController.js
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const dataFilePath = path.join(__dirname, '../data', 'weatherData.json');
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
// Utility function to read/write weather data
function readData() {
  return JSON.parse(fs.readFileSync(dataFilePath, 'utf-8'));
}

function writeData(data) {
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
}

// Handle requests
exports.handleRequest = (req, res) => {
  if (req.url === '/api/weather' && req.method === 'POST') {
    // Create Weather Entry
    let body = '';
    req.on('data', chunk => (body += chunk.toString()));
    req.on('end', () => {
      const { location, date } = JSON.parse(body);
      const data = readData();
      const id = data.length + 1;
      data.push({ id, location, date });
      writeData(data);
      res.writeHead(201, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'Weather entry created', id }));
    });

  } else if (req.url === '/api/weather' && req.method === 'GET') {
    // Retrieve All Entries
    const data = readData();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data));

  } else if (req.url.startsWith('/api/weather/') && req.method === 'GET') {
    // Get Weather Details
    const id = parseInt(req.url.split('/').pop());
    const data = readData();
    const entry = data.find(item => item.id === id);
    if (!entry) {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'Entry not found' }));
    } else {
      axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${entry.location}&appid=32b636bfff82b98e4b41b3c596afdd32`)
        .then(response => {
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ entry, weatherInfo: response.data }));
        })
        .catch(error => {
          res.writeHead(500, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: error.message }));
        });
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Not Found' }));
  }
};
