define(function(require, exports, module) {
	var Marionette = require("marionette");
	var App        = require("App");

	var Page = {
		view: null,

		constructor: function(options) {
			this.view = new this.view(options);
			App.layout.getRegion("main").show(this.view);
			Marionette.bindEntityEvents(this, this.view, this.viewEvents);
			this.listenTo(this.view, "destroy", this.destroy);
			Marionette.Object.prototype.constructor.apply(this, arguments);
		},

		destroy: function() {
			this.view.destroy();
			Marionette.Object.prototype.destroy.apply(this, arguments);
		}
	};

	module.exports = Marionette.Object.extend(Page);
});