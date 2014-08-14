module.exports = function (grunt) {
	grunt.initConfig({
		jshint: {
			options: {
				jshintrc: true
			},
			all: ['Gruntfile.js', 'index.js', 'routes.js', 'static/js/**/*.js']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.registerTask('lint', ['jshint']);
	grunt.registerTask('default', ['jshint']);
};
