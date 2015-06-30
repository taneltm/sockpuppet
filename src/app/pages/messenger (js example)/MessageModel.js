define(function(require, exports, module) {
    var Sockpuppet = require("sockpuppet");

    var MessageModel = {
        defaults: {
            time: null,
            nick: null,
            message: null
        }
    };

    module.exports = Sockpuppet.Model.extend(MessageModel);
});