function ChatHistory () {
    var id = 0;

    var messages = [];

    // Add some example history.
    messages.push({
        "id": getId(),
        "time": (new Date()).toISOString(),
        "nick": "Server",
        "message": [
            "This chat uses a Backbone Collection,",
            "which has it's 'sync' property overridden by Sockpuppet's",
            "Sock.sync(...) function to use Socket.io instead of REST."
        ].join(" ")
    });
    messages.push({
        "id": getId(),
        "time": (new Date()).toISOString(),
        "nick": "Server",
        "message": "Use the '/nick [your name]' command to set your nick."
    });

    function getId() {
        return (id++) + (Math.random() / 2);
    }

    this.insert = function(nick, message) {
        var result = {
            "id": getId(),
            "time": (new Date()).toISOString(),
            "nick": nick,
            "message": message
        };

        messages.push(result);

        return result;
    };

    // Only last 100 messages
    this.read = function() {
        return messages.slice(-100);
    };

    this.update = function(id, nick, message) {
        for (var i = 0; i < messages.length; i++) {
            var hasIdMatch = messages[i].id === id;
            var hasNickMatch = messages[i].nick === nick;

            if (hasIdMatch && hasNickMatch) {
                messages[i].time = (new Date()).toISOString();
                messages[i].message = message;
                messages[i].edited = true;

                return messages[i];
            } else if (hasIdMatch) {
                console.warn(
                    nick + " tried to edit the message of " + messages[i].nick
                );
            }
        }
    };

    this.delete = function(id, nick) {
        for (var i = 0; i < messages.length; i++) {
            var hasIdMatch = messages[i].id === id;
            var hasNickMatch = messages[i].nick === nick;

            if (hasIdMatch && hasNickMatch) {
                messages[i].time = (new Date()).toISOString();
                messages[i].message = null;
                messages[i].edited = true;

                return messages[i];
            } else if (hasIdMatch) {
                console.warn(
                    nick + " tried to delete the message of " + messages[i].nick
                );
            }
        }
    };
}

module.exports = ChatHistory;