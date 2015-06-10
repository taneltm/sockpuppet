define(function(require, exports, module) {
    var App        = require("App");
    var Marionette = require("marionette");
    var ColorModel = require("widgets/colorPicker/ColorModel");
    var template   = require("tpl!widgets/colorPicker/ColorPickerView.tpl");

    var ColorPickerView = {

        template: template,

        model: new ColorModel(),

        ui: {
            "$canvas": "canvas",
            "$result": ".result"
        },

        events: {
            "mousedown": "onMouseDown",
            "mouseup": "onMouseUp",
            "mousemove": "onMouseMove"
        },

        modelEvents: {
            "change": "render"
        },

        templateHelpers: {
            getStyle: function() {
                var style = "background-color:rgb(R,G,B);";
                style = style.replace("R", this.red);
                style = style.replace("G", this.green);
                style = style.replace("B", this.blue);
                
                style += "width:250px;";
                return style;
            }
        },

        onRender: function() {
            var $canvas = this.ui.$canvas;
            var canvas  = $canvas.get(0);


            this.ctx = canvas.getContext('2d');

            var w = 250;
            var h = 250;
            console.log("onRender!!", w, h);
            var gradient1 = this.ctx.createLinearGradient(0, 0, w, 0);
            var gradient2 = this.ctx.createLinearGradient(0, 0, 0, h);

            gradient1.addColorStop(0, 'red');  
            gradient1.addColorStop(1 / 6, 'orange');  
            gradient1.addColorStop(2 / 6, 'yellow');  
            gradient1.addColorStop(3 / 6, 'green');  
            gradient1.addColorStop(4 / 6, 'blue');  
            gradient1.addColorStop(5 / 6, 'indigo');  
            gradient1.addColorStop(1, 'violet'); 
            this.ctx.fillStyle = gradient1;  
            this.ctx.fillRect(0, 0, w, h);

            gradient2.addColorStop(0, 'white');
            gradient2.addColorStop(1 / 2, 'transparent');
            gradient2.addColorStop(1, 'black');

            this.ctx.fillStyle = gradient2;
            this.ctx.fillRect(0, 0, w, h);

        },

        onMouseUp: function(event) {
            this.model.trigger("change");
        },

        onMouseDown: function(event) {
            this.setColorsSilently(event);
        },

        onMouseMove: function(event) {
            this.setColorsSilently(event);
        },

        setColorsSilently: function(event) {
            var offset = this.ui.$canvas.offset();
            var x = event.pageX - offset.left;
            var y = event.pageY - offset.top;

            var imgData = this.ctx.getImageData(x, y, 1, 1).data;
            var r = imgData[0];
            var g = imgData[1];
            var b = imgData[2];

            this.model.set({
                "red":   r,
                "green": g,
                "blue":  b
            }, {silent: true});
        }
    };

    module.exports = Marionette.ItemView.extend(ColorPickerView);
});