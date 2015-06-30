define(function(require, exports, module) {
    var App        = require("App");
    var Marionette = require("marionette");
    var Sockpuppet = require("sockpuppet");

    var HeaderView = require("widgets/header/HeaderView");

    var Header = { view: HeaderView };

    module.exports = Sockpuppet.Widget.extend(Header);
});