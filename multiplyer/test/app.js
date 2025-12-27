// Import the http module
const http  = require('http');

// Define the port number the server will listen on
const port = 3000;

// Define the HTML code you want to render
const htmlCode = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My Node.js Page</title>
    <!-- Note: Link to static assets won't work in this simple example. -->
</head>
<body>
    <h1>Hello from Node.js!</h1>
    <p>This is a static HTML page served by a Node.js server at  http://localhost:${port}/.</p>
</body>
</html>`;

// Create the server
const server = http.createServer((req,res)=>{
    // Set the response HTTP header with HTTP status and Content type
    res.statusCode = 200;
    // res.setHeader('Content-Type','text/plain'); // for plain text
    res.setHeader('Content-Type','text/html'); // for html code
    

    // Send the response body "Hello World"
    // res.end('hello world \n')

    // Send the HTML code as the response body
    res.end(htmlCode);
})

// Start the server and listen for incoming requests
server.listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}/`);
    
})


