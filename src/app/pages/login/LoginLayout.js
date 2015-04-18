define(function(require, exports, module) {
	var Marionette = require("marionette");
	var templates  = require("hbs-pages");
	var FormAuth   = require("widgets/formAuth/FormAuth");

	var LoginLayout = {
		className: "container",
		
		template: templates.LoginLayout,

		regions: {
			formAuthRegion: ".widget-form-auth"
		},

		onRender: function() {
			console.log("LoginLayout:onRender")
			new FormAuth({ region: this.formAuthRegion });
		}
	};

	module.exports = Marionette.LayoutView.extend(LoginLayout);
});