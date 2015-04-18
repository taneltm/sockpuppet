define(function(require, exports, module) {
	var Page       = require("Page");
	var TestLayout = require("pages/test/TestLayout");

	var Test = { view: TestLayout };

	module.exports = Page.extend(Test);
});