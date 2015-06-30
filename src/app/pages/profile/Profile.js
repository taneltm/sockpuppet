define(function(require, exports, module) {
    var App        = require("App");
    var Sockpuppet = require("sockpuppet");
    var template   = require("tpl!pages/profile/Profile.tpl");

    var Profile = {
        pageRegion: App.layout.getRegion("main"),

        className: "container",
        
        template: template,

        model: App.user
    };

    module.exports = Sockpuppet.Page.extend(Profile);
});