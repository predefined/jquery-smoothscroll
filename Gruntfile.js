module.exports = function(grunt) {
  
  var BANNER = '/*! <%= pkg.name %> v<%= pkg.version %> - Copyright <%= pkg.author %> <%= grunt.template.today("yyyy-mm-dd") %> */';
  
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    uglify: {
      options: {
        report: 'gzip',
        mangle: {
          except: [ 'jQuery', '$' ]
        },
        
        banner: BANNER
      },
      
      build: {
        options: {
          sourceMap: 'jquery.smoothScroll.min.js.map'
        },
        files: {
          'jquery.smoothScroll.min.js': 'jquery.smoothScroll.js'
        }
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-uglify');
  
  grunt.registerTask('default', 'Create min version.', [ 'uglify' ]);
  
};
