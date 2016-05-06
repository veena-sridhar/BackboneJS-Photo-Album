var AppView = Backbone.View.extend({

	initialize: function () {
		this.photoListView = new PhotoListView({collection: this.model.get('photoList')});
	},

	render: function () {
		return this.$el.html([
			this.photoListView.$el
		]);
	}

});