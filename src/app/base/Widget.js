define(function(require, exports, module) {
	var Marionette = require("marionette");

	var Widget = {
		view: null,

		constructor: function(options) {
			this.view = new this.view(options);
			options.region.show(this.view);
			Marionette.bindEntityEvents(this, this.view, this.viewEvents);
			this.listenTo(this.view, "destroy", this.destroy);
			Marionette.Object.prototype.constructor.call(this, arguments);
		},

		destroy: function() {
			this.view.destroy();
			Marionette.Object.prototype.destroy.call(this, arguments);
		}
	};

	module.exports = Marionette.Object.extend(Widget);
});