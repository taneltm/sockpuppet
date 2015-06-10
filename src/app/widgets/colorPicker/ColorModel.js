define(function(require, exports, module) {
    var Backbone = require("backbone");

    var ColorModel = {
        defaults: {
            red: 0,
            green: 0,
            blue: 0
        }
    };

    module.exports = Backbone.Model.extend(ColorModel);
});