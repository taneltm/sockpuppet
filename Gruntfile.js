module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    stylus: {
      compile: {
        options: {
          compress: false
        },
        files: {
          "build/style.css": [
            "src/style/main.styl",
            "src/app/pages/*/*.styl",
            "src/app/widgets/*/*.styl"
          ]
        }
      }
    },

    copy: {
      "build": {
        expand: true,
        cwd: "src",
        dest: "build/",
        src: [
          "**",
          "!style/**/*.styl"
        ]
      },

      "release": {
        expand: true,
        cwd: "build",
        dest: "release",
        src: [
          "index.html",
          "style.css",
          "images/**",
          "libs/require.js",
          "libs/**/*.css",
          "libs/**/*.css.map",
          "libs/**/*.css.map"
        ]
      }
    },

    coffee: {
      compile: {
        options: {
          sourceMap: true
        },
        expand: true,
        flatten: false,
        cwd: "build",
        src: ["**/*.coffee"],
        dest: "build",
        ext: ".js"
      }
    },

    requirejs: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      compile: {
        options: {
          baseUrl: "build/app",
          include: [
            "../libs/require.js"
          ],
          mainConfigFile: "build/main.js",
          name: "../main",
          out: "release/main.js",
          findNestedDependencies: true,
          optimize: "uglify"
        }
      }
    },

    jshint: {
      options: {
        reporter: require('jshint-stylish')
      },
      all: ['Gruntfile.js', 'src/app/**/*.js']
    },

    clean: {
      "build": ["build"],
      "release": ["release"]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('build', [
    'clean',
    'jshint',
    'stylus',
    'copy:build',
    'coffee'
  ]);

  grunt.registerTask('release', [
    'build',
    'requirejs',
    'copy:release'
  ]);

  grunt.registerTask('default', [
    'build'
  ]);

};