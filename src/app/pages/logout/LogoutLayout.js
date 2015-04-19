define(function(require, exports, module) {
	var Marionette = require("marionette");
	var template   = require("tpl!pages/logout/LogoutLayout.tpl");

	var LogoutLayout = {
		className: "container",
		
		template: template
	};

	module.exports = Marionette.LayoutView.extend(LogoutLayout);
});