define(function(require, exports, module) {
    var App = require("App");
    var Sockpuppet = require("sockpuppet");
    var template = require("tpl!pages/login/Login.tpl");
    var FormAuth = require("widgets/formAuth/FormAuth");

    var Login = {
        pageRegion: App.layout.getRegion("main"),

        className: "container",

        template: template,

        regions: {
            formAuthRegion: ".region-authentication-form"
        },

        initialize: function(options) {
            console.log("Login:initialize");

            this.listenTo(App.service, "auth:login:success", this.onLogin);
            this.listenTo(App.service, "auth:login:fail", this.onLogin);
        },

        onRender: function() {
            console.log("LoginLayout:onRender");
            new FormAuth({
                region: this.formAuthRegion
            });
        },

        onLogin: function(userData) {
            console.log("Login:onLogin");
            App.user.set(userData);
        }
    };

    module.exports = Sockpuppet.Page.extend(Login);
});