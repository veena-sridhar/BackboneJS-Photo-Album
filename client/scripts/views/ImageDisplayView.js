var ImageDisplayView = Backbone.View.extend({

	tagName: 'img',

	initialize: function () {
		this.render();
	},

	render: function () {
		this.$el.children().detach();

		this.$el.html('<img')
	}


});