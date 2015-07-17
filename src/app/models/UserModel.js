define(function(require, exports, module) {
    var Sockpuppet  = require("sockpuppet");

    var UserModel = {
        sync: "auth",

        defaults: {
            isLoggedIn: false,
            loginError: null,
            honorific: null,
            forename: null,
            surname: null,
            lifestory: null
        },

        initialize: function() {
            this.fetch();
        }
    };

    module.exports = Sockpuppet.Model.extend(UserModel);
});