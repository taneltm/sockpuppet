require.config({
	baseUrl: "app",
	paths: {
		/* --[ Paths ]--------------------------------------------------- */
		"Page":   "base/Page",
		"Widget": "base/Widget",
		"Sock":   "base/Sock",

		"utils": "../utils",

		"bootstrap":   "../libs/bootstrap",
		"jquery":      "../libs/jquery",
		"underscore":  "../libs/lodash",
		"backbone":    "../libs/backbone",
		"marionette":  "../libs/backbone.marionette",
		"handlebars":  "../libs/handlebars.runtime-v2.0.0",
		"socket.io":   "../libs/socket.io",
		"text":        "../libs/require.text",
		"tpl":         "../libs/require.underscore-tpl",
		"hbs-pages":   "../hbs-pages",
		"hbs-widgets": "../hbs-widgets"
	}
});

require(["App", "AppRouter", "AppController"], function(App, AppRouter, AppController) {
	App.router = new AppRouter({
		controller: new AppController(App)
	});

	App.start();

	// For debugging purposes only
	window.App = App;
});