var express = require('express');
var app = express();

var mongoose = require('mongoose');

var path = require('path');
app.use(express.static(path.join(__dirname, '/public')));


app.get('/', function(req, res){
  res.send("asdf")
})

// app.get('/players', playerController.getPlayers)

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
