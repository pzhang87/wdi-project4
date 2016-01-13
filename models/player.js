require("../db/schema.js");
var mongoose = require("mongoose");

var PlayerModel = mongoose.model("Player");
module.exports = PlayerModel;
