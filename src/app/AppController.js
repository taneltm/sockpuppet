define(function(require, exports, module) {
	var Marionette = require("marionette");
	var App        = require("App");

	var AuthService = require("services/Auth");

	var HeaderWidget = require("widgets/header/Header");

	var Home    = require("pages/home/Home");
	var Login   = require("pages/login/Login");
	var Logout  = require("pages/logout/Logout");
	var Profile = require("pages/profile/Profile");
	var Test    = require("pages/test/Test");

	var AppController = {
		initialize: function() {
			this.initializeServices();

			new HeaderWidget({ region: App.layout.getRegion("header") });
		},

		initializeServices: function() {
			new AuthService();
		},

		index: function() {
			new Home();
		},

		login: function() {
			new Login();
		},

		logout: function() {
			new Logout();
		},

		profile: function() {
			new Profile();
		},

		test: function(id) {
			new Test({ linkId: id });
		}
	};

	module.exports = Marionette.Controller.extend(AppController);
});