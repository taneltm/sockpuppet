define(function(require, exports, module) {
    var App        = require("App");
    var Sockpuppet = require("sockpuppet");

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

    module.exports = Sockpuppet.Widget.extend(ColorPicker);
});