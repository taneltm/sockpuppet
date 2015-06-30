define(function(require, exports, module) {
    var App        = require("App");
    var Marionette = require("marionette");

    var Auth = {
        initialize: function(options) {
            this.listenTo(App.widget, "auth:submit", this.login);
            this.listenTo(App.service, "auth:logout", this.logout);

            App.sock.on("auth:login:success", this.onLoginSuccess);
            App.sock.on("auth:login:fail", this.onLoginFail);
            App.sock.on("auth:logout", this.onLogoutDone);
            App.sock.on("auth:status", this.onStatusDone);

            App.sock.emit("auth:status");
        },

        onBeforeDestroy: function() {
            App.sock.removeListener("auth:login:success", this.onLoginSuccess);
            App.sock.removeListener("auth:login:fail", this.onLoginFail);
            App.sock.removeListener("auth:logout", this.onLogoutDone);
        },

        login: function(loginCreds) {
            App.sock.emit("auth:login", loginCreds);
        },

        logout: function() {
            App.sock.emit("auth:logout");
        },

        onLoginSuccess: function(response) {
            App.service.trigger("auth:login:success", response);
        },

        onLoginFail: function(response) {
            App.service.trigger("auth:login:fail", response);
        },

        onLogoutDone: function(response) {
            App.service.trigger("auth:logout:done", response);
        },

        onStatusDone: function(response) {
            App.service.trigger("auth:status:done", response);
        }
    };

    module.exports = Marionette.Object.extend(Auth);
});