var mongoose = require('mongoose');
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://127.0.0.1:27017/pr-vods');

var Schema = mongoose.Schema,
    ObjectId = Schema.Types.ObjectId


//define schema for player
var PlayerSchema = new Schema({
    id: Number,
    name: String,
    rank: Number,
    profile_image: String,
    image: String,
    videos: [],
  });

var VideoSchema = new Schmea({
  link: String
})

var Player = mongoose.model("Player", PlayerSchema)
