module.exports = function(grunt) {

  // load in the grunt tasks
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp/*',
            '<%= pkg.dist %>/{,*/}*',
            //'<%= pkg.dist %>/*',
            '!<%= pkg.dist %>/.git{,*/}*'
          ]
        }]
      },
      server: '.tmp'
    },
    concat: {
      generated: {
        files: [
          {
            dest: '.tmp/concat/js/app.js',
            src: [
              'assets/js/*.js',
              '<%= pkg.app %>/app.js',
              '<%= pkg.app %>/pages/{,*/}*.js'
            ]
          }
        ]
      }
    },
    ngAnnotate: {
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/concat/js/app.js',
          src: ['.'],
          dest: '.tmp/concat/js/app.js'
        }]
      }
    },
    usemin: {
      html: ['<%= pkg.dist %>/{,*/}*.html'],
      css: ['<%= pkg.dist %>/assets/styles/{,*/}*.css'],
      options: {
        assetsDirs: ['<%= pkg.dist %>','<%= pkg.dist %>/images']
      }
    },
    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: 'assets/icons',
          src: '{,*/}*.{png,jpg,jpeg,gif}',
          dest: '<%= pkg.dist %>/images'
        }]
      }
    },
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= pkg.app %>',
          dest: '<%= pkg.dist %>/app',
          src: [
            '*.{ico,png,txt}',
            '.htaccess',
            '*.html',
            'pages/{,*/}*.html',
            'core/{,*/}*.html',
            'images/{,*/}*.{webp}',
            'fonts/{,*/}*.*'
          ]
        }, {
          expand: true,
          cwd: '.',
          dest: '<%= pkg.dist %>/',
          src: ['index.html']
        },{
          expand: true,
          cwd: '.tmp/images',
          dest: '<%= pkg.dist %>/images',
          src: ['generated/*']
        }, {
          expand: true,
          cwd: '.',
          src: 'bower_components/bootstrap-sass-official/assets/fonts/bootstrap/*',
          dest: '<%= pkg.dist %>/assets/css'
        },{
          expand: true,
          cwd: '<%= pkg.app %>',
          src: '[**].js',
          dest: '<%= pkg.dist %>/assets/js'
        }]
      },
      styles: {
        expand: true,
        cwd: '<%= pkg.app %>/styles',
        dest: '.tmp/styles/',
        src: '{,*/}*.css'
      }
    },

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: '.tmp/concat/js/app.js',
        dest: '<%= pkg.dist %>/<%= pkg.app %>/app.js'
      }
    },
    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          '<%= pkg.dist %>/assets/css/style.css': 'assets/css/main.scss'
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  //grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', [
    'clean',
    'copy:dist',
    'concat',
    'ngAnnotate',
    'uglify',
    'sass',
    'usemin',
    'imagemin'
  ]);
  //grunt.registerTask('default', ['sass']);
};