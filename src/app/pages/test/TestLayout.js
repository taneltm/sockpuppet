define(function(require, exports, module) {
	var Marionette = require("marionette");
	var Backbone   = require("backbone");
	var template   = require("tpl!pages/test/TestLayout.tpl");

	var ColorPicker = require("widgets/colorPicker/ColorPicker");

	var TestLayout = {
		className: "container",
		
		template: template,

		templateHelpers: {
			getRandomNumber: function() {
				return Math.random();
			}
		},

		regions: {
			"colorPickerRegion": ".region-color-picker" 
		},

		initialize: function(options) {
			this.model = new Backbone.Model();
			this.model.set("linkId", options.linkId);
		},

		onRender: function() {
			new ColorPicker({ region: this.colorPickerRegion });
		}
	};

	module.exports = Marionette.LayoutView.extend(TestLayout);
});