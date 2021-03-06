var mongoose = require('mongoose')
var conn = mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://127.0.0.1:27017/pr-vods')
var PlayerModel = require("../models/player")
var VideoModel = require("../models/video")

// conn.on("error", function(err){
//   console.log("Oops! Mongo threw an error. Is `mongod` running?");
//   console.log(err.message);
//   process.exit();
// });

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
  profile_image: "http://i.imgur.com/xKXsb4R.jpg",
  video: "vk6U1l1Kt4s"
});

nintendude.save().then(console.log("saved!"));

var chillindude = new PlayerModel({
  id: '',
  name: "Chillindude",
  rank: 2,
  team: "Team Liquid",
  characters: ["Fox"],
  profile_image: "http://imgur.com/WaidhiC.jpg",
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
  characters: ["Ice Climbers, Y. Link"],
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
  profile_image: "http://i.imgur.com/39TRtgp.jpg",
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
  name: "Cyrain",
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
  video: "IgVaz8gGo2s"
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
  profile_image: "http://i.imgur.com/t9SCV91.jpg",
  video: "ilC2EOjtT2I"
});

smashGod.save().then(console.log("saved!"));

var thumbs = new PlayerModel({
  id: '',
  name: "ThumbsWayUp",
  rank: 12,
  team: "",
  characters: ["Captain Falcon"],
  profile_image: "http://i.imgur.com/EJVy50h.jpg",
  video: "FQ1ELFXVSoo"
});

thumbs.save().then(console.log("saved!"));

var hat = new PlayerModel({
  id: '',
  name: "Hat",
  rank: 13,
  team: "",
  characters: ["Sheik"],
  profile_image: "http://i.imgur.com/t9SCV91.jpg",
  video: "GijJVZtGqWc"
});

hat.save().then(console.log("saved!"));

var mahone = new PlayerModel({
  id: '',
  name: "Mahone",
  rank: 14,
  team: "",
  characters: ["Jigglypuff"],
  profile_image: "http://i.imgur.com/t9SCV91.jpg",
  video: "JTJDSVBKDCA"
});

mahone.save().then(console.log("saved!"));

var sg = new PlayerModel({
  id: '',
  name: "SG",
  rank: 15,
  team: "",
  characters: ["Fox"],
  profile_image: "http://i.imgur.com/8Gd8TeN.jpg",
  video: "4ihENhKTbs0"
});

sg.save().then(console.log("saved!"));

var wenbo = new PlayerModel({
  id: '',
  name: "Wenbobular",
  rank: 16,
  team: "",
  characters: ["Fox, Falco"],
  profile_image: "http://i.imgur.com/ZMovfzy.jpg",
  video: "yAs6GgXVYCY"
});

wenbo.save().then(console.log("saved!"));

var bones = new PlayerModel({
  id: '',
  name: "Bones",
  rank: 17,
  team: "",
  characters: ["Falco"],
  profile_image: "http://i.imgur.com/t9SCV91.jpg",
  video: "I2MLDYPiR4I"
});

bones.save().then(console.log("saved!"));

var azen = new PlayerModel({
  id: '',
  name: "Azen Zagenite",
  rank: 18,
  team: "",
  characters: ["Marth"],
  profile_image: "http://i.imgur.com/0DFiYML.png",
  video: "LxL6px8hnyE"
});

azen.save().then(console.log("saved!"));

var junebug = new PlayerModel({
  id: '',
  name: "Junebug",
  rank: 19,
  team: "",
  characters: ["Sheik"],
  profile_image: "http://i.imgur.com/t9SCV91.jpg",
  video: "ZdAy9jWabAc"
});

junebug.save().then(console.log("saved!"));

var aglet = new PlayerModel({
  id: '',
  name: "Aglet",
  rank: 20,
  team: "",
  characters: ["Jigglypuff"],
  profile_image: "http://i.imgur.com/t9SCV91.jpg",
  video: "uv9Ab-0hfzI"
});

aglet.save().then(console.log("saved!"));
