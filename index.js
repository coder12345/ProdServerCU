var http = require('http'); // 1 - Import Node.js core module
var port = 3000
var server = http.createServer(function (req, res) {   // 2 - creating server
    res.write('POGGGGG');
    res.end();
});

server.listen(port, function(error) {
    if (error) {
        console.log('Something went very wrong', error);
    } else {
        console.log('Server is listening on port ' + port)
    }
}) //3 - listen for any incoming requests

console.log('Node.js web server at port 5000 is running..')
