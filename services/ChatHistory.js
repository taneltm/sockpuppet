function ChatHistory () {
    var id = 0;

    var messages = [];

    // Add some example history.
    messages.push({
        "id": id++,
        "time": "12:00",
        "nick": "Marty",
        "message": "Whoa. Wait a minute, Doc. Are you trying to tell me that my mother has got the hots for me?"
    });
    messages.push({
        "id": id++,
        "time": "12:05",
        "nick": "Doc",
        "message": "Precisely!"
    });
    messages.push({
        "id": id++,
        "time": "12:10",
        "nick": "Marty",
        "message": "Whoa. This is heavy."
    });
    messages.push({
        "id": id++,
        "time": "12:12",
        "nick": "Doc",
        "message": "There's that word again. \"Heavy.\" Why are things so heavy in the future? Is there a problem with the Earth's gravitational pull? "
    });

    this.insert = function(nick, message) {
        messages.push({
            "id": id++,
            "time": (new Date()).toISOString(),
            "nick": nick,
            "message": message
        });
    }

    this.update = function(id, message) {
        
    }
}

module.exports = ChatHistory;