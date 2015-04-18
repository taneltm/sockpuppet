define(function(require, exports, module) {
	var Marionette = require("marionette");

	var AppRouter = {
		appRoutes: {
			"": "index",
			"login": "login",
			"logout": "logout",
			"profile": "profile",
			"link/:id": "test",
		}
	};

	module.exports = Marionette.AppRouter.extend(AppRouter);
});