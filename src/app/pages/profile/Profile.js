define(function(require, exports, module) {
	var Page          = require("Page");
	var ProfileLayout = require("pages/profile/ProfileLayout");

	var Profile = { view: ProfileLayout };

	module.exports = Page.extend(Profile);
});