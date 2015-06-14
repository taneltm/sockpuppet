define(function(require, exports, module) {
    var App          = require("App");
    var Marionette   = require("marionette");
    var template     = require("tpl!pages/messenger/MessengerLayout.tpl");
    var MessagesView = require("pages/messenger/MessageCollectionView");

    var MessengerLayout = {
        className: "container",
        
        template: template,

        regions: {
            "messages": ".region-messages"
        },

        initialize: function() {
            this.messagesView = new MessagesView();
        },

        onRender: function() {
            this.messages.show(this.messagesView);
        }
    };

    module.exports = Marionette.LayoutView.extend(MessengerLayout);
});