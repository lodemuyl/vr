var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

console.log("Server draait");


app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});
app.get('/rasp1', function(req, res) {
    res.sendFile(__dirname + '/rasp1.html');
});
app.get('/rasp2', function(req, res) {
    res.sendFile(__dirname + '/rasp2.html');
});
app.get('/rasp3', function(req, res) {
    res.sendFile(__dirname + '/rasp3.html');
});

app.use('/js', express.static('js'))
app.use('/img', express.static('img'))

server.listen(process.env.PORT || 3000);
