define(function(require, exports, module) {
	var Marionette = require("marionette");
	var template   = require("tpl!pages/login/LoginLayout.tpl");
	var FormAuth   = require("widgets/formAuth/FormAuth");

	var LoginLayout = {
		className: "container",
		
		template: template,

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