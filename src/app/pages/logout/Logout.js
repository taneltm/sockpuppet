define(function(require, exports, module) {
	var App  = require("App");
	var Page = require("Page");

	var LogoutLayout = require("pages/logout/LogoutLayout");

	var Logout = {
		view: LogoutLayout,

		initialize: function(options) {
			console.log("Logout:initialize");

			this.listenTo(App.service, "auth:logout:done", this.onLogout);
			
			App.service.trigger("auth:logout");
		},

		onLogout: function(userData) {
			console.log("Logout:onLogout", userData);
			App.user.set(userData);
			App.navigate("");
		}
	};

	module.exports = Page.extend(Logout);
});