define(function(require, exports, module) {
	var App        = require("App");
	var Sockpuppet = require("sockpuppet");
	var template   = require("tpl!pages/logout/Logout.tpl");

	var Logout = {
		pageRegion: App.layout.getRegion("main"),

		className: "container",
		
		template: template,

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

	module.exports = Sockpuppet.Page.extend(Logout);
});