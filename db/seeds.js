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
  profile_image: "https://i.redditmedia.com/ZI4pZLLTY8BJ8GBaHwIJOk_llRCY_rS26dH1RVbz1Oc.jpg?w=320&s=e760689b6b2a231e685c27a483d84426",
  video: "vk6U1l1Kt4s"
});

nintendude.save().then(console.log("saved!"));

var chillindude = new PlayerModel({
  id: '',
  name: "Chillindude",
  rank: 2,
  team: "Team Liquid",
  characters: ["Fox"],
  profile_image: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/3c/3c941fdf953f5678bef7f22ba62b07401098ce19_full.jpg",
  video: "KhsOW-_TwfU",
});

chillindude.save().then(console.log("saved!"));

var redd = new PlayerModel({
  id: '',
  name: "Redd",
  rank: 3,
  team: "VGBootcamp",
  characters: ["Fox"],
  profile_image: "https://pbs.twimg.com/profile_images/631258499037528064/Dp3LbZK5_400x400.jpg",
  video: "4ihENhKTbs0",
});

redd.save().then(console.log("saved!"));

var chudat = new PlayerModel({
  id: '',
  name: "ChuDat",
  rank: 4,
  team: "",
  characters: ["Ice Climbers, Young Link"],
  profile_image: "https://meleeitonme.files.wordpress.com/2013/12/22chudat-e1387130730399.jpg",
  video: "T98uKLWpl9E",
});

chudat.save().then(console.log("saved!"));

var milkman = new PlayerModel({
  id: '',
  name: "MilkMan",
  rank: 5,
  team: "",
  characters: ["Fox"],
  profile_image: "http://www.meleeitonme.com/wp-content/uploads/98_milkman-300x298.jpeg",
  video: "Fd6xjrKYQDk",
});

milkman.save().then(console.log("saved!"));

var llod = new PlayerModel({
  id: '',
  name: "Llod",
  rank: 6,
  team: "",
  characters: ["Peach"],
  profile_image: "http://placecage.com/200/200",
  video: "9BTGcIv2laA"
});

llod.save().then(console.log("saved!"));

var plank = new PlayerModel({
  id: '',
  name: "Plank",
  rank: 7,
  team: "",
  characters: ["Sheik"],
  profile_image: "https://pbs.twimg.com/profile_images/625750286569750529/9rs1c4CJ.jpg",
  video: "1TqHKnUvF1w"
});

plank.save().then(console.log("saved!"));

var cyrain = new PlayerModel({
  id: '',
  name: "Plank",
  rank: 8,
  team: "",
  characters: ["Fox"],
  profile_image: "https://meleeitonme.files.wordpress.com/2013/12/57cyrain-e1386573662356.jpg",
  video: "RpabZ_1VcVU"
});

cyrain.save().then(console.log("saved!"));

var doh = new PlayerModel({
  id: '',
  name: "DoH",
  rank: 9,
  team: "",
  characters: ["Peach"],
  profile_image: "http://www.meleeitonme.com/wp-content/uploads/79_DoH-300x300.jpg",
  video: ""
});

doh.save().then(console.log("saved!"));

var vist = new PlayerModel({
  id: '',
  name: "Vist",
  rank: 10,
  team: "",
  characters: ["Luigi"],
  profile_image: "http://www.ssbwiki.com/images/3/37/Vist.png",
  video: "ilC2EOjtT2I"
});

vist.save().then(console.log("saved!"));

var smashGod = new PlayerModel({
  id: '',
  name: "SmashGOD",
  rank: 11,
  team: "",
  characters: ["Marth"],
  profile_image: "http://placecage.com/200/200",
  video: "ilC2EOjtT2I"
});

smashGod.save().then(console.log("saved!"));

var thumbs = new PlayerModel({
  id: '',
  name: "ThumbsWayUp",
  rank: 12,
  team: "",
  characters: ["Captain Falcon"],
  profile_image: "http://placecage.com/200/200",
  video: "FQ1ELFXVSoo"
});

thumbs.save().then(console.log("saved!"));

var hat = new PlayerModel({
  id: '',
  name: "Hat",
  rank: 13,
  team: "",
  characters: ["Sheik"],
  profile_image: "http://placecage.com/200/200",
  video: ""
});

hat.save().then(console.log("saved!"));

var mahone = new PlayerModel({
  id: '',
  name: "Mahone",
  rank: 14,
  team: "",
  characters: ["Jigglypuff"],
  profile_image: "http://placecage.com/200/200",
  video: ""
});

mahone.save().then(console.log("saved!"));

var sg = new PlayerModel({
  id: '',
  name: "SG",
  rank: 15,
  team: "",
  characters: ["Fox"],
  profile_image: "http://placecage.com/200/200",
  video: "4ihENhKTbs0"
});

sg.save().then(console.log("saved!"));

var wenbo = new PlayerModel({
  id: '',
  name: "Wenbobular",
  rank: 16,
  team: "",
  characters: ["Fox, Falco"],
  profile_image: "http://placecage.com/200/200",
  video: "yAs6GgXVYCY"
});

wenbo.save().then(console.log("saved!"));

var bones = new PlayerModel({
  id: '',
  name: "Bones",
  rank: 17,
  team: "",
  characters: ["Falco"],
  profile_image: "http://placecage.com/200/200",
  video: ""
});

bones.save().then(console.log("saved!"));

var azen = new PlayerModel({
  id: '',
  name: "Azen Zagenite",
  rank: 18,
  team: "",
  characters: ["Marth"],
  profile_image: "http://placecage.com/200/200",
  video: ""
});

azen.save().then(console.log("saved!"));

var junebug = new PlayerModel({
  id: '',
  name: "Junebug",
  rank: 19,
  team: "",
  characters: ["Sheik"],
  profile_image: "http://placecage.com/200/200",
  video: ""
});

junebug.save().then(console.log("saved!"));

var aglet = new PlayerModel({
  id: '',
  name: "Aglet",
  rank: 20,
  team: "",
  characters: ["Jigglypuff"],
  profile_image: "http://placecage.com/200/200",
  video: ""
});

aglet.save().then(console.log("saved!"));
