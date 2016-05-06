var PhotoListView = Backbone.View.extend({

	tagName: 'table',

	initialize: function () {
		this.render();
	},

	render: function () {

		this.$el.children().detach();

		this.$el.html('<th>Images</th>').append(
			this.collection.map(function (photo) {
				return new PhotoListEntryView({model: photo}).render();
			})
		);
	}

});