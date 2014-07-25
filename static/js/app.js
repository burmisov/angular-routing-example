angular.module('ngRoutingExample', ['ngRoute'])

	.controller('MainController', function ($scope, $route, $routeParams, $location) {

	})

	.controller('FirstController', function ($scope) {

	})

	.controller('SecondController', function ($scope) {

	})

	.controller('ThirdController', function ($scope) {

	})

	.config(function ($routeProvider, $locationProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'partials/first',
				controller: 'FirstController'
			})
			.when('/second', {
				templateUrl: 'partials/second',
				controller: 'SecondController'
			})
			.when('/third', {
				templateUrl: 'partials/third',
				controller: 'ThirdController'
			});

		$locationProvider.html5Mode(true);
	});
