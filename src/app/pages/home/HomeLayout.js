define(function(require, exports, module) {
	var Marionette = require("marionette");
	var templates  = require("hbs-pages");

	var HomeLayout = {
		className: "container",
		
		template: templates.HomeLayout,

		regions: {
			browserRegion: "#browser"
		}
	};

	module.exports = Marionette.LayoutView.extend(HomeLayout);
});