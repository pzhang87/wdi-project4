App.Views.PlayersList = Backbone.View.extend({
  el: "#playerslist",

  events: {

  },

  initialize: function(){
    console.log("Players View initialized!");
    this.listenTo(this.collection, "add", this.renderOne);
    this.listenTo(this.collection, "reset", this.renderAll);
  },

  renderOne: function(player){
    var view = new App.Views.Player({model: player});
    this.$el.append(view.$el)
  },

  renderAll: function(){
    this.$el.empty();
    this.collection.each(this.renderOne.bind(this));
  }
  
})
