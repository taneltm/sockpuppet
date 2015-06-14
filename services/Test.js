function Auth (socket) {
    var details = {
        isLoggedIn: true,
        honorific: "Mr",
        forename: "Test",
        surname: "Dummy",
        lifestory: "I have been a TestDummy for all my life!"
    };

    socket.on("socktest", onSockTest);
    socket.on("socktest::create", onSockTestCreate);
    socket.on("socktest::read", onSockTestRead);
    socket.on("socktest::update", onSockTestUpdate);
    socket.on("socktest::delete", onSockTestDelete);

    function onSockTest() {
        console.log("socktest");
    }

    function onSockTestCreate(data) {
        console.log("socktest::create", data);
        details = data;
    }

    function onSockTestDelete() {
        console.log("socktest::delete");
        details = {};
    }
    
    function onSockTestRead() {
        console.log("socktest::read");
        socket.emit("socktest", details);
    }

    function onSockTestUpdate(data) {
        for (var key in data) {
            details[key] = data[key];
        }

        if (details.forename === "Bob") {
            details.forename = "Rob";
        }
    }
}


module.exports = Auth;