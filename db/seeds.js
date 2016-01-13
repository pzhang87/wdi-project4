var mongoose = require('mongoose')
var conn = mongoose.connect('mongodb://127.0.0.1:27017/pr-vods')
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

var smashGod = new PlayerModel({
  id: '',
  name: "SmashGOD",
  rank: 11,
  team: "",
  characters: ["Marth"],
  profile_image: "http://placecage.com/200/200",
  videos: []
});

smashGod.save();

var thumbs = new PlayerModel({
  id: '',
  name: "ThumbsWayUp",
  rank: 12,
  team: "",
  characters: ["Captain Falcon"],
  profile_image: "http://placecage.com/200/200",
  videos: []
});

thumbs.save();

var hat = new PlayerModel({
  id: '',
  name: "Hat",
  rank: 13,
  team: "",
  characters: ["Sheik"],
  profile_image: "http://placecage.com/200/200",
  videos: []
});

hat.save();

var mahone = new PlayerModel({
  id: '',
  name: "Mahone",
  rank: 14,
  team: "",
  characters: ["Jigglypuff"],
  profile_image: "http://placecage.com/200/200",
  videos: []
});

mahone.save();

var sg = new PlayerModel({
  id: '',
  name: "SG",
  rank: 15,
  team: "",
  characters: ["Fox"],
  profile_image: "http://placecage.com/200/200",
  videos: []
});

sg.save();

var wenbo = new PlayerModel({
  id: '',
  name: "Wenbobular",
  rank: 16,
  team: "",
  characters: ["Fox, Falco"],
  profile_image: "http://placecage.com/200/200",
  videos: []
});

wenbo.save();

var bones = new PlayerModel({
  id: '',
  name: "Bones",
  rank: 17,
  team: "",
  characters: ["Falco"],
  profile_image: "http://placecage.com/200/200",
  videos: []
});

bones.save();

var azen = new PlayerModel({
  id: '',
  name: "Azen Zagenite",
  rank: 18,
  team: "",
  characters: ["Marth"],
  profile_image: "http://placecage.com/200/200",
  videos: []
});

azen.save();

var junebug = new PlayerModel({
  id: '',
  name: "Junebug",
  rank: 19,
  team: "",
  characters: ["Sheik"],
  profile_image: "http://placecage.com/200/200",
  videos: []
});

junebug.save();

var aglet = new PlayerModel({
  id: '',
  name: "Aglet",
  rank: 20,
  team: "",
  characters: ["Jigglypuff"],
  profile_image: "http://placecage.com/200/200",
  videos: []
});

aglet.save();
