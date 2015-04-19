define(function(require, exports, module) {
	var Marionette = require("marionette");
	var Backbone   = require("backbone");
	var template   = require("tpl!pages/test/TestLayout.tpl");

	var TestLayout = {
		className: "container",
		
		template: template,

		initialize: function(options) {
			this.model = new Backbone.Model();
			this.model.set("linkId", options.linkId);
		}
	};

	module.exports = Marionette.LayoutView.extend(TestLayout);
});