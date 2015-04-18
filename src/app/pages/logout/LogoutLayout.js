define(function(require, exports, module) {
	var Marionette = require("marionette");
	var templates  = require("hbs-pages");

	var LogoutLayout = {
		className: "container",
		
		template: templates.LogoutLayout
	};

	module.exports = Marionette.LayoutView.extend(LogoutLayout);
});