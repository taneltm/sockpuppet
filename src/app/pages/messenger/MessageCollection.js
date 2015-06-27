define(function(require, exports, module) {
    var Collection   = require("Collection");
    var Sock         = require("Sock");
    var MessageModel = require("pages/messenger/MessageModel");

    var MessageCollection = {
        sync: "chat",
        
        model: MessageModel,

        events: {
            "add": "addMessage",
            "remove": "removeMessage",
            "change": "changeMessage",
            "reset": "resetMessage"
        },

        initialize: function() {
            // Fetch the initial data and start socket listener
            this.fetch({
                remove: false
            });
        },

        addMessage: function(obj) {
            console.log("MessageCollection.addMessage", obj);
        },

        removeMessage: function(obj) {
            console.log("MessageCollection.removeMessage", obj);
        },

        changeMessage: function(obj) {
            console.log("MessageCollection.changeMessage", obj);
        },

        resetMessage: function(obj) {
            console.log("MessageCollection.resetMessage", obj);
        },
    };

    module.exports = Collection.extend(MessageCollection);
});