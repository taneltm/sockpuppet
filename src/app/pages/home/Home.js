define(function(require, exports, module) {
    var App = require("App");
	var Sockpuppet = require("sockpuppet");
	var template   = require("tpl!pages/home/Home.tpl");

	var HomeLayout = {
        pageRegion: App.layout.getRegion("main"),

		className: "container",
		
		template: template
	};

	module.exports = Sockpuppet.Page.extend(HomeLayout);
});