define(function(require, exports, module) {
    var Backbone = require("backbone");
    var sock     = require("mock");

    var Model = {
        constructor: function(options) {
            if (typeof this.sync == "string") {
                this.sync = sock.sync(this.sync);
            }

            Backbone.Model.prototype.constructor.apply(this, arguments);
        }
    };

    module.exports = Backbone.Model.extend(Model);
});