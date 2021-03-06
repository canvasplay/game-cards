module.exports = function(grunt) {


    grunt.initConfig({
      
        watch: {
          
            sass: {
                files: ["src/**/*.scss"],
                tasks: ['styles']
            }
            
        },
        
        sass: {
          options: {
            style: 'expanded',
            sourceMap: true
          },
          dist: {
            files: [{
                expand: true,
                cwd: 'src/',
                src: ['**/*.scss'],
                dest: 'dist/',
                ext: '.css'
            }]
          }
        },
        

        postcss: {
          options: {
            map: true,
            processors: [
              require('autoprefixer')(),
              require('cssnano')()
            ]
          },
          dist: {
            src: 'dist/*.css'
          }
        },
        
        bump: {
          options: {
            files: ['package.json'],
            commit: false,
            createTag: false,
            push: false
          }
        }
        
    });
    
    grunt.loadNpmTasks('grunt-bump');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-postcss');
    
    grunt.registerTask('default', ['styles', 'watch']);
    grunt.registerTask('styles', ['sass','postcss']);
    

};