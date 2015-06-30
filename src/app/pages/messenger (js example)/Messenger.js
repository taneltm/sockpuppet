define(function(require, exports, module) {
    var App          = require("App");
    var Sockpuppet   = require("sockpuppet");
    var tpl          = require("tpl!pages/messenger/Messenger.tpl");
    var MessagesView = require("pages/messenger/MessageCollectionView");

    var Messenger = {
        pageRegion: App.layout.getRegion("main"),

        className: "container",
        
        template: tpl,

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

        send: Sockpuppet.sock.emit("chat"),

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

    module.exports = Sockpuppet.Page.extend(Messenger);
});