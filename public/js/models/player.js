App.Models.Player = Backbone.Model.extend({
  urlRoot: 'http://localhost:3000/players',

  initialize: function(){
    console.log("New Player model created")
  }
})
