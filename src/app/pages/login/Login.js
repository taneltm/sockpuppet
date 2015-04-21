define(function(require, exports, module) {
	var App  = require("App");
	var Page = require("Page");

	var LoginLayout = require("pages/login/LoginLayout");

	var Login = {
		view: LoginLayout,

		initialize: function(options) {
			console.log("Login:initialize");

			this.listenTo(App.service, "auth:login:success", this.onLogin);
			this.listenTo(App.service, "auth:login:fail", this.onLogin);
		},

		onLogin: function(userData) {
			console.log("Login:onLogin");
			App.user.set(userData);
		}
	};

	module.exports = Page.extend(Login);
});