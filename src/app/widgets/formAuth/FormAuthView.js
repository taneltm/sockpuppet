define(function(require, exports, module) {
	var console    = require("utils/console");
	var Marionette = require("marionette");
	var App        = require("App");
	var templates  = require("hbs-widgets");

	var FormAuthView = {
		template: templates.FormAuthTemplate,

		ui: {
			"form": "form",
			"user": "input[type=email]",
			"pass": "input[type=password]"
		},

		events: {
			"submit form": "onSubmit"
		},

		initialize: function() {
			console.log("FormAuthView: init");
		},

		onSubmit: function(event) {
			event.stopPropagation();
			event.preventDefault();

			this.trigger("submit", {
				user: this.ui.user.val(),
				pass: btoa(this.ui.pass.val())
			});
		}
	};

	module.exports = Marionette.ItemView.extend(FormAuthView);
});