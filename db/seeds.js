var mongoose = require('mongoose')
var conn = mongoose.createConnection('mongodb://127.0.0.1:27017/pr-vods')
var PlayerModel = require("../models/player")
var VideoModel = require("../models/video")

conn.on("error", function(err){
  console.log("Oops! Mongo threw an error. Is `mongod` running?");
  console.log(err.message);
  process.exit();
});

PlayerModel.remove({}, function(err){
  console.log(err)
})
VideoModel.remove({}, function(err){
  console.log(err)
})

var nintendude = new PlayerModel({
  id: '',
  name: "Nintendude",
  rank: 1,
  team: "Splyce",
  characters: ["Ice Climbers"],
  profile_image: "http://placecage.com/200/200",
  videos: []
});

nintendude.save();

var chillindude = new PlayerModel({
  id: '',
  name: "Chillindude",
  rank: 2,
  team: "Team Liquid",
  characters: ["Fox"],
  profile_image: "http://placecage.com/200/200",
  videos: [],
});

chillindude.save();

var redd = new PlayerModel({
  id: '',
  name: "Redd",
  rank: 3,
  team: "VGBootcamp",
  characters: ["Fox"],
  profile_image: "http://placecage.com/200/200",
  videos: [],
});

redd.save();

var chudat = new PlayerModel({
  id: '',
  name: "ChuDat",
  rank: 4,
  team: "",
  characters: ["Ice Climbers, Young Link"],
  profile_image: "http://placecage.com/200/200",
  videos: [],
});

chudat.save();

var milkman = new PlayerModel({
  id: '',
  name: "MilkMan",
  rank: 5,
  team: "",
  characters: ["Fox"],
  profile_image: "http://placecage.com/200/200",
  videos: [],
});

milkman.save();

var llod = new PlayerModel({
  id: '',
  name: "Llod",
  rank: 6,
  team: "",
  characters: ["Peach"],
  profile_image: "http://placecage.com/200/200",
  videos: []
});

llod.save();

var plank = new PlayerModel({
  id: '',
  name: "Plank",
  rank: 7,
  team: "",
  characters: ["Sheik"],
  profile_image: "http://placecage.com/200/200",
  videos: []
});

plank.save();

var cyrain = new PlayerModel({
  id: '',
  name: "Plank",
  rank: 8,
  team: "",
  characters: ["Fox"],
  profile_image: "http://placecage.com/200/200",
  videos: []
});

cyrain.save();

var doh = new PlayerModel({
  id: '',
  name: "DoH",
  rank: 9,
  team: "",
  characters: ["Peach"],
  profile_image: "http://placecage.com/200/200",
  videos: []
});

doh.save();

var vist = new PlayerModel({
  id: '',
  name: "Vist",
  rank: 10,
  team: "",
  characters: ["Luigi"],
  profile_image: "http://placecage.com/200/200",
  videos: []
});

vist.save();
