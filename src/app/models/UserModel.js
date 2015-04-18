define(function(require, exports, module) {
	var Backbone  = require("backbone");

	var UserModel = {
		defaults: {
			isLoggedIn: false,
			honorific: null,
			forename: null,
			surname: null,
			lifestory: null
		}
	};

	module.exports = Backbone.Model.extend(UserModel);
});