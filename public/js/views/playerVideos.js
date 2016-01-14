App.Views.PlayerVideos = Backbone.View.extend({
  tagName: "div",
  className: "playerVideos",
  events: {

  },

  initialize: function(){
    this.template = Handlebars.compile($("#playerVideosTemplate").html())
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
