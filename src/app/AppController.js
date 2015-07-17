define(function(require, exports, module) {
    var Marionette = require("marionette");
    var App        = require("App");

    var HeaderWidget = require("widgets/header/Header");

    var Home      = require("pages/home/Home");
    var Login     = require("pages/login/Login");
    var Logout    = require("pages/logout/Logout");
    var Profile   = require("pages/profile/Profile");
    var Test      = require("pages/test/Test");
    var Messenger = require("pages/messenger/Messenger");

    var AppController = {
        initialize: function() {
            new HeaderWidget({ region: App.layout.getRegion("header") });
        },

        index: function() {
            new Home();
        },

        login: function() {
            new Login();
        },

        logout: function() {
            new Logout();
        },

        profile: function() {
            new Profile();
        },

        test: function(id) {
            new Test({ linkId: id });
        },

        messenger: function() {
            new Messenger();
        }
    };

    module.exports = Marionette.Controller.extend(AppController);
});