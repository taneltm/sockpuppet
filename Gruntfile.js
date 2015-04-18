module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    handlebars: {
      "pages": {
        options: {
          namespace: "hbs-pages",
          amd: true,
          processName: function(filePath) {
            var pathPattern = new RegExp("src/app/pages/.+/");
            filePath = filePath.replace(pathPattern, "");
            filePath = filePath.replace(".hbs", "");
            return filePath;
          }
        },
        files: {
          "build/hbs-pages.js": [
            "src/app/pages/**/*.hbs",
          ]
        }
      },
      "widgets": {
        options: {
          namespace: "hbs-widgets",
          amd: true,
          processName: function(filePath) {
            var pathPattern = new RegExp("src/app/widgets/.+/");
            filePath = filePath.replace(pathPattern, "");
            filePath = filePath.replace(".hbs", "");
            return filePath;
          }
        },
        files: {
          "build/hbs-widgets.js": [
            "src/app/widgets/**/*.hbs"
          ]
        }
      }
    },

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
          "!templates/**",
          "!style/**",
        ]
      },

      "public": {
        expand: true,
        cwd: "build",
        dest: "public",
        src: [
          "index.html",
          "style.css",
          "images/**",
          "libs/require.js",
          "libs/**/*.css",
          "libs/**/*.css.map",
          "libs/**/*.css.map",
        ]
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
          out: "public/main.js",
          findNestedDependencies: true,
          optimize: "uglify"
        }
      }
    },

    clean: {
      "build": ["build"],
      "public": ["public"]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('build', [
    'clean',
    'handlebars:pages',
    'handlebars:widgets',
    'stylus',
    'copy:build'
  ]);

  grunt.registerTask('release', [
    'build',
    'requirejs',
    'copy:public'
  ]);

  grunt.registerTask('default', [
    'build'
  ]);

};