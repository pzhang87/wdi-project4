// express
var express = require('express');
var app = express();

//db requirements
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://127.0.0.1:27017/pr-vods');
var Player = require("./models/player");
var Video = require("./models/video");

var path = require('path');
app.use(express.static(path.join(__dirname, '/public')));

//allow cors
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


//routes start here
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
