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
              'assets/js/angular.js',
              'assets/js/angular-ui-router.js',
              '<%= pkg.app %>/app.js',
              '<%= pkg.app %>/pages/{,*/}*.js',
              '<%= pkg.app %>/core/{,*/}*.js'
            ]
          },{
            dest: '.tmp/concat/js/head.js',
            src: [
              'assets/js/jquery.2.min.js',
              'assets/js/jquery-ui.min.js',
              'assets/js/bootstrap.min.js',
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
            'templates/*.html',
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
          cwd: 'assets/icons/',
          dest: '<%= pkg.dist %>/assets/icons',
          src: ['*']
        }, {
          expand: true,
          cwd: 'assets/css',
          src: 'bootstrap.min.css',
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
        files: [
        {
          src: '.tmp/concat/js/app.js',
          dest: '<%= pkg.dist %>/<%= pkg.app %>/app.js'
        },{
          src: '.tmp/concat/js/head.js',
          dest: '<%= pkg.dist %>/<%= pkg.app %>/head.js'
        }]
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
  ]);
  //grunt.registerTask('default', ['sass']);
};