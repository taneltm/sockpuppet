define(function(require, exports, module) {
	var App        = require("App");
	var Marionette = require("marionette");
	var templates  = require("hbs-pages");

	var ProfileLayout = {
		className: "container",
		
		template: templates.ProfileLayout,

		model: App.user
	};

	module.exports = Marionette.LayoutView.extend(ProfileLayout);
});