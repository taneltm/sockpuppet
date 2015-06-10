define(function(require, exports, module) {
    var App        = require("App");
    var Marionette = require("marionette");
    var Widget     = require("Widget");

    var ColorPickerView = require("widgets/colorPicker/ColorPickerView");

    var ColorPicker = {
        view: ColorPickerView,

        viewEvents: {
            "select": "onSelect"
        },

        onSelect: function(color) {
            App.widget.trigger("colorpicker:selected", color);
        }
    };

    module.exports = Widget.extend(ColorPicker);
});