define(function(require, exports, module) {
	var App        = require("App");
	var Marionette = require("marionette");
	var templates  = require("hbs-widgets");

	var HeaderView = {
		template: templates.HeaderView,

		model: App.user,

		initialize: function() {
			console.log("HeaderView:initialize");

			this.listenTo(this.model, "change", this.userModelChange);
			this.listenTo(this.model, "change", this.render);
		},

		onRender: function() {
			console.log("HeaderView:onRender");
		},

		userModelChange: function() {
			console.log("HeaderView:userModelChange");
		}
	};

	module.exports = Marionette.ItemView.extend(HeaderView);
});