define(function(require, exports, module) {
    var App        = require("App");
    var Marionette = require("marionette");
    var template   = require("tpl!pages/messenger/MessageItemView.tpl");
    var moment     = require("moment");

    var MessageCollectionView = {
        template: template,

        className: "item",

        templateHelpers: {
            getTime: function() {
                return moment(this.time).format("HH:mm");
            },

            getNick: function() {
                return this.nick || "Anonymous";
            }
        }
    };

    module.exports = Marionette.ItemView.extend(MessageCollectionView);
});