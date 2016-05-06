var PhotoListEntryView = Backbone.View.extend({

	tagName: 'tr',

	template: _.template('<td><%= title %></td>'),

	events: {

	},

	render: function () {
		return this.$el.html(this.template(this.model.attributes));
	}



});