define(function(require, exports, module) {
    var Backbone = require("backbone");
    var Sock     = require("Sock");

    var Model = {
        constructor: function(options) {
            if (typeof this.sync == "string") {
                this.sync = Sock.sync(this.sync);
            }

            Backbone.Model.prototype.constructor.call(this, arguments);
        }
    };

    module.exports = Backbone.Model.extend(Model);
});