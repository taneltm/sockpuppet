define(function(require, exports, module) {
    var Backbone   = require("backbone");
    var Marionette = require("marionette");
    var io         = require("socket.io");

    var serverUrl = function() {
        var result = "{proto}{serv}{port}";

        result = result.replace("{proto}", location.protocol + "//");
        result = result.replace("{serv}", location.hostname);
        result = result.replace("{port}", (location.port?':'+location.port:''));

        return result;
    }();

    var sock = function() {
        var conn = io(serverUrl);

        /**
         * @example
         *     onSubmit: function(message) {
         *         Sockpuppet.sock.emit("chat::create", message);
         *     }
         */
        var emit = function(channel, data) {
            conn.emit(channel, data);
        };

        /**
         * @example
         *     sendChatMessage: Sockpuppet.sock.emitter("chat::create"),
         *     onSubmit: function(message) {
         *         this.sendChatMessage(message);
         *     }
         */
        var emitter = function(channel) {
            return function(data) {
                conn.emit(channel, data);
            };
        };

        /**
         * @example
         *     // With Backbone model/collection
         *     sync: Sockpuppet.sock.sync("chat"),
         *     initilaize: function() {
         *         this.fetch(); // Triggers socket.emit("chat::read")
         *                       // Then starts listening on the "chat" channel
         *     }
         *
         * @example
         *     // With Sockpuppet model/collection
         *     sync: "chat",
         *     initialize: function() {
         *         this.fetch();
         *     }
         */
        var sync = function(channel) {
            var bound = false;

            return function(method, entity, options) {
                console.log("sockpuppet.sock.sync", method, entity, options);
                var data;

                var namespace = [channel, method].join("::");
                
                var shouldHaveData = (
                    method === 'create' || method === 'update' || method === 'patch' || method === 'delete'
                );

                if (!options.data && entity && shouldHaveData) {
                    data = options.attrs || entity.toJSON(options);
                }

                options.reconnect = options.reconnect || function() {
                    conn.emit(channel + "::read");
                };

                console.log("Sockpuppet.sync:emit", namespace, data);
                conn.emit(namespace, data);
                entity.trigger('request', entity, conn, options);

                if (bound === false && options && options.success) {
                    var isModel       = entity instanceof Backbone.Model;
                    var hasCollection = !!entity.collection;

                    conn.on(channel, options.success);
                    conn.on("reconnect", options.reconnect);

                    bound = true;

                    if (isModel && !hasCollection) {
                        entity.on("destroy", function() {
                            conn.removeListener(channel, options.success);
                            conn.removeListener("reconnect", options.reconnect);
                            bound = false;
                        });
                    }
                }

                return conn;
            };
        };

        return {
            sync: sync,
            emit: emit,
            connection: conn
        };
    }();

    var Page = {
        constructor: function(options) {
            Marionette.LayoutView.prototype.constructor.apply(this, arguments);
            this.pageRegion.show(this);
        }
    };

    var Widget = {
        view: null,

        constructor: function(options) {
            this.view = new this.view(options);
            options.region.show(this.view);
            Marionette.bindEntityEvents(this, this.view, this.viewEvents);
            this.listenTo(this.view, "destroy", this.destroy);
            Marionette.Object.prototype.constructor.apply(this, arguments);
        },

        destroy: function() {
            this.view.destroy();
            Marionette.Object.prototype.destroy.apply(this, arguments);
        }
    };

    var Model = {
        constructor: function(options) {
            if (typeof this.sync == "string") {
                this.sync = sock.sync(this.sync);
            }

            Backbone.Model.prototype.constructor.apply(this, arguments);
        }
    };

    var Collection = {
        constructor: function(options) {
            if (typeof this.sync == "string") {
                this.sync = sock.sync(this.sync);
            }

            Backbone.Collection.prototype.constructor.apply(this, arguments);
        }
    };

    var Sockpuppet = {
        Page:       Marionette.LayoutView.extend(Page),
        Widget:     Marionette.Object.extend(Widget),
        Model:      Backbone.Model.extend(Model),
        Collection: Backbone.Collection.extend(Collection),
        sock:       sock,
        serverUrl:  serverUrl
    };

    module.exports = Sockpuppet;
});