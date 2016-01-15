App.Routers.Player = Backbone.Router.extend({
  routes: {
    '_' : 'index',
    '' : 'index',
    'players/:id' : 'showPlayer'
  },
  initialize: function(){
    App.Collections.players = new App.Collections.Players();
    App.Views.playersList = new App.Views.PlayersList({collection: App.Collections.players});
  },
  index: function(){
    App.Collections.players.fetch();
  // },
  // showPlayer: function(name){
  //   App.Models.player = App.Collections.players.get({name: name});
  //   App.Views.player = new App.Views.Player({model: App.Models.player})
  //   App.Views.player.renderInfo();
  }

});
