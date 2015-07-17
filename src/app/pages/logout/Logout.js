define(function(require, exports, module) {
    var _          = require("underscore");
    var App        = require("App");
    var Sockpuppet = require("sockpuppet");
    var template   = require("tpl!pages/logout/Logout.tpl");

    var Logout = {
        pageRegion: App.layout.getRegion("main"),

        className: "container",
        
        template: template,

        onRender: function(options) {
            _.defer(this.logout);
        },

        logout: function() {
            if (App.user.get("isLoggedIn")) {
                Sockpuppet.sock.emit("auth::logout");
            } else {
                App.navigate("#");
            }
        }
    };

    module.exports = Sockpuppet.Page.extend(Logout);
});