App = {
  Models: {},
  Views: {},
  Collections: {},
  Routers: {}
}

$(document).ready(function(){
  var players = new App.Collections.Players();
  var playersList = new App.Views.PlayersList({collection: players});
  players.fetch()
  .then(function(){
    console.log("what do I need a promise here for?")
  });
})
