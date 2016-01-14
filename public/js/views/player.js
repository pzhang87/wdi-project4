App.Views.Player = Backbone.View.extend({
  tagName: "div",
  className: "player",
  events: {
    "click .player": "renderInfo",
    "click .close": "render"
  },

  initialize: function(){
    this.template = Handlebars.compile($("#playerTemplate").html())
    this.infoTemplate = Handlebars.compile($("#infoTemplate").html())
    this.listenTo(this.model, "change", this.render)
    this.render();
  },
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
  },

  renderInfo: function(){
    this.$el.html(this.infoTemplate(this.model.toJSON()))
  }
})
