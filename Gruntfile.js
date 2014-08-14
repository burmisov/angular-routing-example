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
		},
		protractor: {
			local: {
				options: {
					configFile: 'test/client/conf-local.js'
				}
			}
		},
		exec: {
			installChromeDriver: {
				cmd: 'node .\\node_modules\\grunt-protractor-runner\\node_modules\\protractor' +
					'\\bin\\webdriver-manager update --chrome'
			}
		},
		run: {
			server: {
				options: {
					wait: false
				},
				cmd: 'node',
				args: ['index.js']
			}
		},
		jasmine: {
			all: {
				src: ['static/js/**/*.js'],
				options: {
					specs: ['test/client/unit/**/*.spec.js'],
					display: 'full',
					vendor: [
						'http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js',
						'http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js',
						'http://ajax.googleapis.com/ajax/libs/angularjs/1.3.0-beta.17/angular.min.js',
						'http://ajax.googleapis.com/ajax/libs/angularjs/1.3.0-beta.17/angular-route.min.js'
					]
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-jasmine-node');
	grunt.loadNpmTasks('grunt-protractor-runner');
	grunt.loadNpmTasks('grunt-exec');
	grunt.loadNpmTasks('grunt-run');
	grunt.loadNpmTasks('grunt-contrib-jasmine');

	grunt.registerTask('lint', ['jshint']);
	grunt.registerTask('unit-test', ['jasmine_node']);
	grunt.registerTask('default', ['jshint', 'jasmine_node']);
	grunt.registerTask('test-protractor', ['exec:installChromeDriver', 'protractor']);
	grunt.registerTask('client-test', [
		'run:server',
		'test-protractor',
		'stop:server'
	]);
};
