var express = require('express')
    fs = require('fs');

var app = express.createServer(express.logger());

var data = fs.readFileSync('index.html').toString('utf-8');

app.get('/', function(request, response) {
  response.send(data);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
