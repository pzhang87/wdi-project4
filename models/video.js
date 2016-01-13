require("../db/schema");
var mongoose = require("mongoose");

var VideoModel = mongoose.model("Video");
module.exports = VideoModel;
