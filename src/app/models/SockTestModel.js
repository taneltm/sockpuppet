define(function(require, exports, module) {
    var Backbone = require("backbone");
    var Sock     = require("Sock");

    var SockTestModel = {
        sync: Sock.sync("socktest"),
        
        defaults: {
            isLoggedIn: false,
            honorific: null,
            forename: null,
            surname: null,
            lifestory: null
        },

        initialize: function() {
            console.log("SockTestModel.initilaize");
            this.set("forename", "Bob");
            this.save();

            setTimeout(function() {
                this.fetch();
            }.bind(this), 2000);

            this.on("change", function() {
                console.log("SockTestModel.change!", this);
            });
        }
    };

    module.exports = Backbone.Model.extend(SockTestModel);
});