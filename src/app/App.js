define(function(require, exports, module) {
	var Backbone   = require("backbone");
	var Marionette = require("marionette");
	var serverUrl  = require("utils/serverUrl");
	var io         = require("socket.io");
	var UserModel  = require("models/UserModel");
	
	var App = new Marionette.Application();


	var IndexLayout = Marionette.LayoutView.extend({
		el: 'body',

		template: false,

		regions: {
			header: "header",
			main: "main",
			footer: "footer"
		}
	});

	App.layout   = new IndexLayout();
	App.user     = new UserModel();
	App.service  = new Backbone.Wreqr.EventAggregator();
	App.widget   = new Backbone.Wreqr.EventAggregator();
	App.sock     = io(serverUrl);
	App.navigate = function(path) {
		App.router.navigate(path, {trigger: true});
	}

	App.layout.render();
	
	App.sock.on("connect", function(data) {
		console.log("sock:connect", data);
	});

	App.user.on("change:isLoggedIn", function() {
		App.navigate("");
	});

	App.addInitializer(function() {
		Backbone.history.start();
	});

	// For debugging
	window.App = App;
	
	module.exports = App;
});