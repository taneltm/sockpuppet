define(function(require, exports, module) {
    var App               = require("App");
    var Marionette        = require("marionette");
    var MessageItemView   = require("pages/messenger/MessageItemView");
    var MessageCollection = require("pages/messenger/MessageCollection");

    var MessageCollectionView = {
        collection: new MessageCollection(),

        childView: MessageItemView
    };

    module.exports = Marionette.CollectionView.extend(MessageCollectionView);
});