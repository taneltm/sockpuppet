define(function(require, exports, module) {
    var io        = require("socket.io");
    var serverUrl = require("utils/serverUrl");

    var socket = io(serverUrl);

    socket.on("connect", function(data) {
        console.log("SocketSync:onConnect", data);
    });

    socket.on("disconnect", function(data) {
        console.log("SocketSync:onDisconnect");
    });

    var socketSync = function(channel) {
        console.log("Sock.socketSync");
        var bound = false;

        return function(method, model, options) {
            console.log("Sock.sync", method);
            var data;

            var namespace = [channel, method].join("::");
            
            var shouldHaveData = (
                method === 'create' || method === 'update' || method === 'patch'
            );

            if (!options.data && model && shouldHaveData) {
                data = JSON.stringify(options.attrs || model.toJSON(options));
            }

            console.log("Sock.sync", namespace, data);
            socket.emit(namespace, data);
            model.trigger('request', model, socket, options);

            if (bound === false && options && options.success) {
                socket.on(channel, options.success);
                bound = true;

                model.on("destroy", function() {
                    socket.removeListener(channel, this.options.success);
                    bound = false;
                });
            }

            return socket;
        };
    };

    var Sock = {
        sync: socketSync,
        socket: socket
    };

    module.exports = Sock;
});