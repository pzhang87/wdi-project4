App.Collections.Players = Backbone.Collection.extend({
  model: App.Models.Player,
  // url: "http://localhost:3000/players",
  url: "http://mdva-ssbm-pr.herokuapp.com/players"
})
