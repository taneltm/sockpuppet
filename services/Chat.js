function Chat (socket, chatHistory) {
    var namespaces = {
        "chat::create": onChatCreate,
        "chat::read":   onChatRead,
        "chat::update": onChatUpdate,
        "chat::delete": onChatDelete
    };

    for (var key in namespaces) {
        socket.on(key, namespaces[key]);
    }

    function getNick() {
        var sess = socket.request.session;
        return sess ? sess.nick : null;
    }

    function onChat() {
        console.log("chat");
    }

    function onChatCreate(message) {
        console.log("chat::create", message);
        
        if (message && message.indexOf("/") === 0) {
            onChatCommand(message);
            return;
        }

        var result = chatHistory.insert(getNick(), message);

        console.log(result);
        
        socket.emit("chat", [result]);
        socket.broadcast.emit("chat", [result]);
    }

    function onChatDelete(data) {
        chatHistory.delete(data.id, getNick());
    }
    
    function onChatRead(data) {
        var result = chatHistory.read();
        socket.emit("chat", result);
    }

    function onChatUpdate(data) {
        var result = chatHistory.update(data.id, data.nick, data.message);
        socket.emit("chat", [result]);
        socket.broadcast.emit("chat", [result]);
    }

    function onChatCommand(data) {
        var words = data.split(" ");
        var cmd   = words[0];
        var arg1  = words.length > 1 ? words[1] : null;
        var arg2  = words.length > 2 ? words[2] : null;

        if (cmd === "/nick") {
            if (arg1) {
                var oldNick = socket.request.session.nick || "Anonymous";
                socket.request.session.nick = arg1;
                socket.emit("chat", {
                    time: (new Date()).toISOString(),
                    nick: "Server",
                    message: "Your nick is now " + arg1
                });
                socket.broadcast.emit("chat", {
                    time: (new Date()).toISOString(),
                    nick: "Server",
                    message: oldNick + " is now known as " + arg1
                });
            } else {
                socket.emit("chat", {
                    time: (new Date()).toISOString(),
                    nick: "Server",
                    message: "Usage: /nick [your nickname]"
                });
            }
        } else {
            socket.emit("chat", {
                time: (new Date()).toISOString(),
                nick: "Server",
                message: "Unknown command"
            });
        }
    }
}

module.exports = Chat;