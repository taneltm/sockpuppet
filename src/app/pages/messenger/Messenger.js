define(function(require, exports, module) {
    var Page            = require("Page");
    var MessengerLayout = require("pages/messenger/MessengerLayout");

    var Messenger = { view: MessengerLayout };

    module.exports = Page.extend(Messenger);
});