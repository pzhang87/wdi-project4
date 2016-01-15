App.Models.Player = Backbone.Model.extend({
  urlRoot: "http://mdva-ssbm-pr.herokuapp.com/players",

  initialize: function(){
    console.log("New Player model created")
  }
})
