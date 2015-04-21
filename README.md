SockPuppet
==========

SockPuppet is a boilerplate for a project which uses...
* RequireJS modules
* Marionette.js for the MVC framework
* Stylus as the CSS preprocessor
* Node.js/IO.js as the backend
* Socket.io as the link between the client and the server
* Lo-Dash as a drop-in replacement for underscore.js
* Grunt.js to build the project


Setup
=====

Before you can use this, you will need to install Grunt.  
You can install it by running `npm install -g grunt-cli`.

Other dependencies are installed when you run `npm install`.


Client
======

The `src` folder contains the source files for the client.  
Run `grunt` or `grunt build` to builds the client under `build/` (unoptimized).  
Run `grunt release` to build the client under `build/` and then create an optimized release under `release/`.


Server
======

The current server-side code is meant as a simplified example.  
`node server` starts the server on port 80 and serves client files from `release/`.  
`node server debug` starts the server on port 3000 and serves client files from `build/`, useful when you want to debug the client using the browser.

After starting the server, you can navigate to http://localhost or http://localhost:3000 and you should see the demo page.


Third party libraries
=====================

`src/libs/` folder contains 3rd-party libraries. Update them manually if they are out-of-date.  
You can use un-minified libraries, `grunt release` will minify everything for you.
