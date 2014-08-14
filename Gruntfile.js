module.exports = function (grunt) {
	grunt.initConfig({
		jshint: {
			options: {
				jshintrc: true
			},
			all: ['*.js', 'test/**/*.js', 'static/js/**/*.js']
		},
		jasmine_node: {
			all: ['test/server/']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-jasmine-node');

	grunt.registerTask('lint', ['jshint']);
	grunt.registerTask('unit-test', ['jasmine_node']);
	grunt.registerTask('default', ['jshint', 'jasmine_node']);
};
