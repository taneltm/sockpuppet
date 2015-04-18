define(function(require, exports, module) {
	var App        = require("App");
	var Marionette = require("marionette");
	var Widget     = require("Widget");

	var FormAuthView = require("widgets/formAuth/FormAuthView");

	var FormAuth = {
		view: FormAuthView,

		viewEvents: {
			"submit": "onFormSubmit"
		},

		onFormSubmit: function(loginCreds) {
			App.widget.trigger("auth:submit", loginCreds);
		}
	};

	module.exports = Widget.extend(FormAuth);
});