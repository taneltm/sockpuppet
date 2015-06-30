require.config({
	baseUrl: "app",
	paths: {
		/* --[ Paths ]--------------------------------------------------- */
		"sockpuppet": "../libs/sockpuppet",

		"utils": "../utils",

		"bootstrap":   "../libs/bootstrap/bootstrap",
		"jquery":      "../libs/jquery",
		"underscore":  "../libs/lodash",
		"backbone":    "../libs/backbone",
		"marionette":  "../libs/backbone.marionette",
		"handlebars":  "../libs/handlebars.runtime-v2.0.0",
		"socket.io":   "../libs/socket.io",
		"text":        "../libs/require.text",
		"tpl":         "../libs/require.underscore-tpl",
		"moment":      "../libs/moment",
		"hbs-pages":   "../hbs-pages",
		"hbs-widgets": "../hbs-widgets"
	},

	shim : {
        "bootstrap" : { "deps" :['jquery'] }
    }
});

require(["App", "AppRouter", "AppController", "bootstrap"], function(App, AppRouter, AppController) {
	App.router = new AppRouter({
		controller: new AppController(App)
	});

	App.start();

	// For debugging purposes only
	window.App = App;
});