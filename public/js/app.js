App = {
  Models: {},
  Views: {},
  Collections: {},
  Routers: {}
}

$(document).ready(function() {
  App.Routers.player = new App.Routers.Player();
  Backbone.history.start();
});
