var mongoose = require('mongoose')
var conn = mongoose.connect('mongodb://localhost/reminders')
var PlayerModel = require("../models/player")
var VideoModel = require("../models/video")
PlayerModel.remove({}, function(err){
  console.log(err)
})
VideoModel.remove({}, function(err){
  console.log(err)
})
