define(function(require, exports, module) {
	var App        = require("App");
	var Marionette = require("marionette");
	var template   = require("tpl!pages/profile/ProfileLayout.tpl");

	var ProfileLayout = {
		className: "container",
		
		template: template,

		model: App.user
	};

	module.exports = Marionette.LayoutView.extend(ProfileLayout);
});