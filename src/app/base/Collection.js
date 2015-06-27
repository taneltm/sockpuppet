define(function(require, exports, module) {
    var Backbone = require("backbone");
    var Sock     = require("Sock");

    var Collection = {
        constructor: function(options) {
            if (typeof this.sync == "string") {
                this.sync = Sock.sync(this.sync);
            }

            Backbone.Collection.prototype.constructor.call(this, arguments);
        }
    };

    module.exports = Backbone.Collection.extend(Collection);
});