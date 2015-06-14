define(function(require, exports, module) {
    var Backbone = require("backbone");

    var MessageModel = {
        defaults: {
            time: null,
            nick: null,
            message: null
        }
    };

    module.exports = Backbone.Model.extend(MessageModel);
});