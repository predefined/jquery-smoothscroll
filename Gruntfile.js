module.exports = function(grunt) {
  
  var BANNER = '/*! <%= pkg.name %> v<%= pkg.version %> - Copyright <%= pkg.author %> <%= grunt.template.today("yyyy-mm-dd") %> */';
  
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    // build:
    uglify: {
      options: {
        report: 'gzip',
        mangle: {
          // we want those!
          except: [ 'jQuery', '$' ]
        },
        
        banner: BANNER
      },
      
      build: {
        options: {
          sourceMap: 'jquery-smoothscroll.min.js.map'
        },
        files: {
          'jquery-smoothscroll.min.js': 'jquery-smoothscroll.js'
        }
      }
    },
    
    // test:
    mocha: {
      test: {
        options: {
          run: true
        },
        src: [ 'test/*test.html' ]
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-mocha');
  
  grunt.registerTask('default', 'Create min version.', [ 'uglify' ]);
  grunt.registerTask('test', 'Test the plugin.', [ 'mocha' ]);
  
};
