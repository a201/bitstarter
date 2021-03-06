var express = require('express');

var app = express.createServer(express.logger());

var fs=require('fs');
var file_contents = fs.readFileSync("index.html");
var content_string = file_contents.toString();

//console.log(content_string);
app.get('/', function(request, response) {
  response.send(content_string);
});

var port = process.env.PORT || 5000;
    app.listen(port, function() {
   console.log("Listening on " + port);
});
