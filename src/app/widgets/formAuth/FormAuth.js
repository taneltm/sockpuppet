define(function(require, exports, module) {
    var Sockpuppet   = require("sockpuppet");
    var FormAuthView = require("widgets/formAuth/FormAuthView");

    var FormAuth = {
        view: FormAuthView,

        viewEvents: {
            "submit": "onFormSubmit"
        },

        onFormSubmit: function(loginCreds) {
            Sockpuppet.sock.emit("auth::login", loginCreds);
        }
    };

    module.exports = Sockpuppet.Widget.extend(FormAuth);
});