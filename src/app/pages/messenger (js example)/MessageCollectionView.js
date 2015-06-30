define(function(require, exports, module) {
    var $                 = require("jquery");
    var App               = require("App");
    var Marionette        = require("marionette");
    var MessageItemView   = require("pages/messenger/MessageItemView");
    var MessageCollection = require("pages/messenger/MessageCollection");

    var MessageCollectionView = {
        collection: new MessageCollection(),

        childView: MessageItemView,


        onAddChild: function() {
            var $body = $("html, body");

            $body.stop().animate({scrollTop: $body.height()}, 1000);
        }
    };

    module.exports = Marionette.CollectionView.extend(MessageCollectionView);
});