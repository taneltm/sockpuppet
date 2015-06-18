function Chat () {
    this.socket = null;

    var nextId = 5;
    var messages = [
        {
            "id": 0,
            "time": "12:00",
            "nick": "Marty",
            "message": "Whoa. Wait a minute, Doc. Are you trying to tell me that my mother has got the hots for me?"
        },
        {
            "id": 1,
            "time": "12:05",
            "nick": "Doc",
            "message": "Precisely!"
        },
        {
            "id": 2,
            "time": "12:10",
            "nick": "Marty",
            "message": "Whoa. This is heavy."
        },
        {
            "id": 3,
            "time": "12:12",
            "nick": "Doc",
            "message": "There's that word again. \"Heavy.\" Why are things so heavy in the future? Is there a problem with the Earth's gravitational pull? "
        }
    ];


    this.setSocket = function(socket) {
        var map = {
            "chat::create": onChatCreate,
            "chat::read":   onChatRead,
            "chat::update": onChatUpdate,
            "chat::delete": onChatDelete
        }
        if (this.socket) {
            for (var key in map) {
                this.socket.removeListener(key, map[key]);
            }
        }

        this.socket = socket;

        for (var key in map) {
            socket.on(key, map[key]);
        }

    }.bind(this);

    function onChat() {
        console.log("chat");
    }

    function onChatCreate(data) {
        console.log("chat::create", data);
        
        if (data.message && data.message.indexOf("/") === 0) {
            onChatCommand(data.message);
            return;
        }

        data.id = ++nextId;
        
        var sess, details, nick;
        var date = new Date();

        var hh = date.getHours();
        if (hh < 10) {
            hh = "0" + hh;
        }

        var mm = date.getMinutes();
        if (mm < 10) {
            mm = "0" + mm;
        }

        data.time = hh + ":" + mm;
        
        sess    = this.socket.request.session;
        nick = sess ? sess.nick : null;

        console.log(sess, details, nick);
        
        data.nick = nick || "Anonymous";
        messages.push(data);
        this.socket.emit("chat", [data]);
        this.socket.broadcast.emit("chat", [data]);
    }

    function onChatDelete(data) {
        console.log("chat::delete", data);
    }
    
    function onChatRead(data) {
        console.log("chat::read", data);
        this.socket.emit("chat", messages);
    }

    function onChatUpdate(data) {
        console.log("chat::update", data);
        for (var key in data) {
            details[key] = data[key];
        }
        console.log("onChatUpdate not implemented fully");
    }

    function onChatCommand(data) {
        var words = data.split(" ");
        var cmd   = words[0];
        var arg1  = words.length > 1 ? words[1] : null;
        var arg2  = words.length > 2 ? words[2] : null;

        if (cmd === "/nick") {
            if (arg1) {
                var oldNick = this.socket.request.session.nick || "Anonymous";
                this.socket.request.session.nick = arg1;
                this.socket.emit("chat", {
                    message: "Your nick is now " + arg1
                })
                this.socket.broadcast.emit("chat", {
                    message: oldNick + " is now known as " + arg1
                })
            } else {
                this.socket.emit("chat", {
                    message: "Usage: /nick [your nickname]"
                });
            }
        } else {
            this.socket.emit("chat", { message: "Unknown command" });
        }
    }
}

module.exports = Chat;