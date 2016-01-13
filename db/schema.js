var mongoose = require('mongoose');
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/pr-vods');

var Schema = mongoose.Schema,
    ObjectId = Schema.Types.ObjectId


//define schema for player
var PlayerSchema = new Schema({
  id: Number,
  name: String,
  rank: Number,
  team: String,
  characters: [],
  profile_image: String,
  videos: []
});

var VideoSchema = new Schema({
  link: String,
  title: String
})

var Player = mongoose.model("Player", PlayerSchema)
var Video = mongoose.model("Video", VideoSchema)
