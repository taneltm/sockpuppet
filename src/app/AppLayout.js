define(function(require, exports, module) {
	var Marionette = require("marionette");

	var AppLayout = {
		el: 'body',

		template: false,

		regions: {
			header: "header",
			main: "main",
			footer: "footer"
		}
	});

	module.exports = Marionette.LayoutView.extend(AppLayout);
});