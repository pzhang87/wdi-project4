App.Views.Player = Backbone.View.extend({
  tagName: "div",
  className: "player",
  events: {
    "click .open": "renderInfo",
    "click .close": "render",
    "click .vods": "renderVideoView"
  },

  initialize: function(){
    this.template = Handlebars.compile($("#playerTemplate").html())
    this.infoTemplate = Handlebars.compile($("#infoTemplate").html())
    this.videoTemplate = Handlebars.compile($("#playerVideoTemplate").html())
    this.listenTo(this.model, "change", this.render)
    this.render();
  },
  render: function(){
    App.Routers.player.navigate('')
    this.$el.html(this.template(this.model.toJSON()));
  },

  renderInfo: function(){
    App.Routers.player.navigate('players/'+this.model.get("name"))
    this.$el.html(this.infoTemplate(this.model.toJSON()))
  },

  renderVideoView: function(){
    this.$el.html(this.videoTemplate(this.model.toJSON()))
  }
})
