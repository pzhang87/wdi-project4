var express = require('express');
var app = express();

var mongoose = require('mongoose');

var path = require('path');
app.use(express.static(path.join(__dirname, '/public')));

var Player = require("./models/player");
var Video = require("./models/video");


app.get('/', function(req, res){
  res.send("This is the back-end for the MD/VA PR VODs tracker.")
});

app.get("/players", function(req, res){
  Player.find({}).then(function(players){
    res.json(players);
  })
});
var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
