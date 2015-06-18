define(function(require, exports, module) {
    var App          = require("App");
    var Marionette   = require("marionette");
    var template     = require("tpl!pages/messenger/MessengerLayout.tpl");
    var MessagesView = require("pages/messenger/MessageCollectionView");
    var Sock         = require("Sock");

    var MessengerLayout = {
        className: "container",
        
        template: template,

        regions: {
            "messages": ".region-messages"
        },

        ui: {
            "$form": "form",
            "$input": 'input[type="text"]'
        },

        events: {
            "submit @ui.$form": "onSubmit"
        },

        send: Sock.emit("chat"),

        initialize: function() {
            this.messagesView = new MessagesView();
        },

        onRender: function() {
            this.messages.show(this.messagesView);
        },

        onSubmit: function(e) {
            e.preventDefault();

            var $input  = this.ui.$input;
            var message = $input.val();

            $input.val("");

            this.send(message);
        }
    };

    module.exports = Marionette.LayoutView.extend(MessengerLayout);
});