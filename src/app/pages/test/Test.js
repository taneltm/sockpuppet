define(function(require, exports, module) {
    var Sockpuppet  = require("sockpuppet");
    var Backbone    = require("backbone");
    var ColorPicker = require("widgets/colorPicker/ColorPicker");
    var template    = require("tpl!pages/test/Test.tpl");

    var Test = {
        pageRegion: App.layout.getRegion("main"),

        className: "container",
        
        template: template,

        templateHelpers: {
            getRandomNumber: function() {
                return Math.random();
            }
        },

        regions: {
            "colorPickerRegion": ".region-color-picker" 
        },

        initialize: function(options) {
            this.model = new Backbone.Model();
            this.model.set("linkId", options.linkId);
        },

        onRender: function() {
            new ColorPicker({ region: this.colorPickerRegion });
        }
    };

    module.exports = Sockpuppet.Page.extend(Test);
});