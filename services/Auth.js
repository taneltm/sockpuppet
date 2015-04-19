function Auth (socket) {
	var db = {
		"logged-out": {
			details: {
				isLoggedIn: false,
				honorific: null,
				forename: null,
				surname: null,
				lifestory: null
			}
		},
		"test@test.com": {
			password: new Buffer("test").toString("base64"),
			details: {
				isLoggedIn: true,
				honorific: "Mr",
				forename: "Test",
				surname: "Dummy",
				lifestory: "I have been a TestDummy for all my life!"
			}
		}
	}

	socket.on("auth:status", status);
	socket.on("auth:login", login);
	socket.on("auth:logout", logout);

	function status() {
		console.log("auth:status");
		var details = socket.request.session.details || db["logged-out"].details;
		socket.emit("auth:status", details);
	};

	function login(credentials) {
		console.log("auth:login", credentials);

		var isUserOk = credentials.user in db;
		var isPassOk = isUserOk && credentials.pass === db[credentials.user].password;

		if(isUserOk && isPassOk) {
			console.log("auth:login:success", credentials);

			var details = db[credentials.user].details;

			socket.request.session.details = details;
			socket.emit("auth:login:success", details);
		} else {
			console.log("auth:login:fail", credentials);

			var details = db["logged-out"].details;

			socket.request.session.details = details;
			socket.emit("auth:login:fail", details);
		}

		socket.request.session.save();
	};

	function logout() {
		console.log("auth:logout");
		var details = db["logged-out"].details;

		socket.request.session.details = details;
		socket.emit("auth:logout", details);

		socket.request.session.save();
	};
};


module.exports = Auth;