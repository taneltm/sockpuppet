define(function(require, exports, module) {
    var io        = require("socket.io");
    var serverUrl = require("utils/serverUrl");

    var socket = io(serverUrl);

    var socketEmit = function(channel) {
        var namespace = [channel, "create"].join("::");
        return function(data) {
            socket.emit(namespace, data);
        };
    };

    var socketSync = function(channel) {
        var bound = false;

        return function(method, model, options) {
            var data;

            var namespace = [channel, method].join("::");
            
            var shouldHaveData = (
                method === 'create' || method === 'update' || method === 'patch'
            );

            if (!options.data && model && shouldHaveData) {
                data = JSON.stringify(options.attrs || model.toJSON(options));
            }

            options.reconnect = options.reconnect || function() {
                socket.emit(channel + "::read");
            };

            socket.emit(namespace, data);
            model.trigger('request', model, socket, options);

            if (bound === false && options && options.success) {
                socket.on(channel, options.success);

                socket.on("reconnect", options.reconnect);

                bound = true;

                model.on("destroy", function() {
                    socket.removeListener(channel, options.success);
                    socket.removeListener("reconnect", options.reconnect);
                    bound = false;
                });
            }

            return socket;
        };
    };

    var sock = {
        sync: socketSync,
        emit: socketEmit,
        socket: socket
    };

    module.exports = sock;
});