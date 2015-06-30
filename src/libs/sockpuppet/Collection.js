define(function(require, exports, module) {
    var Backbone = require("backbone");
    var sock     = require("bock");

    var Collection = {
        constructor: function(options) {
            if (typeof this.sync == "string") {
                this.sync = sock.sync(this.sync);
            }

            Backbone.Collection.prototype.constructor.apply(this, arguments);
        }
    };

    module.exports = Backbone.Collection.extend(Collection);
});