// Import the HTTP module
var http = require('http');
// Import the FS (File System) module
var fs = require('fs');

// Create an HTTP server that listens on port 8080
http.createServer(function (req, res) {
    // Set response headers
    res.writeHead(200, {'Content-Type': 'text/html'});

    // Read the HTML file with the correct path and UTF-8 encoding
    fs.readFile('../docfile/docfilehtml.html', 'utf8', function (err, data) {
        if (err) {
            // If there is an error, throw it
            throw err;
        }
        // Write the data (content of the file) to the response
        res.write(data);

        // End the response
        res.end();
    });
}).listen(8080);
