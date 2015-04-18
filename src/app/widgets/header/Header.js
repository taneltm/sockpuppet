define(function(require, exports, module) {
	var App        = require("App");
	var Marionette = require("marionette");
	var Widget     = require("Widget");

	var HeaderView = require("widgets/header/HeaderView");

	var Header = { view: HeaderView };

	module.exports = Widget.extend(Header);
});