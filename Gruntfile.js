module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                files: {
                    'app/styles/css/view1.css' : 'app/styles/sass/view1.sass',
                    'app/styles/css/view2.css' : 'app/styles/sass/view2.sass'
                }
            }
        },
        watch: {
            css: {
                files: '**/*.{scss,sass}',
                tasks: ['sass']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('dev',['sass']);
    grunt.registerTask('default',['watch']);
}