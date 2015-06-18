define(function(require, exports, module) {
    var App          = require("App");
    var Marionette   = require("marionette");
    var template     = require("tpl!pages/messenger/MessageItemView.tpl");

    var MessageCollectionView = {
        template: template
    };

    module.exports = Marionette.ItemView.extend(MessageCollectionView);
});