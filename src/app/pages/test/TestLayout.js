define(function(require, exports, module) {
	var Marionette = require("marionette");
	var Backbone   = require("backbone");
	var templates  = require("hbs-pages");

	var TestLayout = {
		className: "container",
		
		template: templates.TestLayout,

		initialize: function(options) {
			this.model = new Backbone.Model();
			this.model.set("linkId", options.linkId);
		}
	};

	module.exports = Marionette.LayoutView.extend(TestLayout);
});