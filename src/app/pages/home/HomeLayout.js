define(function(require, exports, module) {
	var Marionette = require("marionette");
	var template   = require("tpl!pages/home/HomeLayout.tpl");

	var HomeLayout = {
		className: "container",
		
		template: template
	};

	module.exports = Marionette.LayoutView.extend(HomeLayout);
});