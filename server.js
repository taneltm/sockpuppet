/**
 * Configurations
 */
var config = {
	"default": {
		port: 80,
		path: '/release',
		cookieSecret: 'nyancatIsReal'
	},
	"debug": {
		port: 3000,
		path: '/build',
		cookieSecret: 'unicornsAreAwesome'
	}
};

/**
 * Require libs
 */
var express = require('express');
var app     = express();

var server       = require('http').Server(app);
var io           = require('socket.io')(server);
var cookieParser = require('cookie-parser')();
var session      = require('express-session');
// var FileStore    = require('session-file-store')(session);

/**
 * Require services
 */
var AuthService = require("./services/Auth");


/**
 * Parse options (quick and dirty)
 */
var args = process.argv.slice(2);
if (args[0]) {
	if (args[0] in config) {
		config = config[args[0]];
	} else {
		console.error("Unknown parameter:", args[0]);
		console.log("Known parameters are:", Object.keys(config).join(", "));
		console.log("Executing without parameters, uses 'default'.");
		process.exit(1);
	}
} else {
	config = config["default"];
}

/**
 * Session middleware, used by Express and Socket.io
 */
var sessionMiddleware = session({
	// Redis session store should be used instead.
	// Default is MemoryStore.
	// 
	// store: new FileStore(),

	secret: config.cookieSecret,
	cookie: { secure: false },
	saveUninitialized: true,
	resave: true
});

/**
 * Setup Express
 *
 * cookie.secure is false to allow HTTP, default is HTTPS.
 */
app.use(cookieParser);
app.use(sessionMiddleware);

app.get('/', function (req, res) {
	res.sendFile(__dirname + config.path + '/index.html');
});

app.use(express.static(__dirname + config.path));

/**
 * Setup Sockets
 */
io.use(function(socket, next) {
    sessionMiddleware(socket.request, socket.request.res, next);
});

io.on('connection', function (socket) {
	console.log("sock:connection");

	new AuthService(socket);
});

/**
 * Start Server
 */
server.listen(config.port, function() {
	console.log("Listening on port", config.port);
});