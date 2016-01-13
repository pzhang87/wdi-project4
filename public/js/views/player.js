App.Views.Player = Backbone.View.extend({
  tagName: "div",
  className: "player",
  events: {

  },

  initialize: function(){
    this.template = Handlebars.compile($("#playerTemplate").html())
    this.listenTo(this.model, "change", this.render)
    this.render();
  },
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
  }
})
