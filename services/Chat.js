function Chat (socket) {
    var messages = [
        {
            "time": "12:00",
            "nick": "Marty",
            "message": "Whoa. Wait a minute, Doc. Are you trying to tell me that my mother has got the hots for me?"
        },
        {
            "time": "12:05",
            "nick": "Doc",
            "message": "Precisely!"
        },
        {
            "time": "12:10",
            "nick": "Marty",
            "message": "Whoa. This is heavy."
        },
        {
            "time": "12:12",
            "nick": "Doc",
            "message": "There's that word again. \"Heavy.\" Why are things so heavy in the future? Is there a problem with the Earth's gravitational pull? "
        }
    ];

    socket.on("chat", onChat);
    socket.on("chat::create", onChatCreate);
    socket.on("chat::read", onChatRead);
    socket.on("chat::update", onChatUpdate);
    socket.on("chat::delete", onChatDelete);

    function onChat() {
        console.log("chat");
    }

    function onChatCreate(data) {
        console.log("chat::create", data);
        messages.push(data);
    }

    function onChatDelete(data) {
        console.log("chat::delete", data);
    }
    
    function onChatRead(data) {
        console.log("chat::read", data);
        socket.emit("chat", messages);
    }

    function onChatUpdate(data) {
        console.log("chat::update", data);
        for (var key in data) {
            details[key] = data[key];
        }
    }
}

module.exports = Chat;