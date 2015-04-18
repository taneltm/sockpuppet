define(function(require, exports, module) {
	if (console) {
		module.exports = console;
	} else {
		module.exports = {
			log: function(){},
			debug: function(){},
			trace: function(){},
			warn: function(){},
			error: function(){},
		};
	}
});