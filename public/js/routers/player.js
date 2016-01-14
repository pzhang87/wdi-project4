App.Routers.Player = Backbone.Router.extend({
  routes: {
    '_' : 'index',
    '' : 'index',
    ':id' : 'showPlayer'
  },
  initialize: function(){
    App.Collections.players = new App.Collections.Players();
    App.Views.playersList = new App.Views.PlayersList({collection: App.Collections.players});
  },
  index: function(){
    App.Collections.players.fetch();
  },

  showPlayer: function(){
    console.log("this should show the player")
    App.Collections.players.fetch().then(function(){
       view = App.Views.playersList.findView(id);
       App.Views.playerVideos.render(view.model);
    });
  }

});
