angular.module('ngRoutingExample', ['ngRoute'])

	.controller('MainController', function () {
		// todo
	})

	.controller('FirstController', function () {
		// todo
	})

	.controller('SecondController', function ($anchorScroll) {
		$anchorScroll();

		// todo
	})

	.controller('ThirdController', function () {
		// todo
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
