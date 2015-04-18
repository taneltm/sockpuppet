define(function(require, exports, module) {
	var Page       = require("Page");
	var HomeLayout = require("pages/home/HomeLayout");

	var Home = { view: HomeLayout };

	module.exports = Page.extend(Home);
});