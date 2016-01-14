App.Routers.Player = Backbone.Router.extend({
  routes: {
    '_' : 'index',
    '' : 'index',
    ':name' : 'showPlayer',
  },
  initialize: function(){
    App.Collections.players = new App.Collections.Players();
    App.Views.playersList = new App.Views.PlayersList({collection: App.Collections.players});
  },
  index: function(){
    App.Collections.players.fetch();
  },

  showPlayer: function(){
    console.log("stuff happens here")
  }
});