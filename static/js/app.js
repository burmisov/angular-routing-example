angular.module('ngRoutingExample', ['ngRoute'])

	.controller('MainController', function () {
		// todo
	})

	.controller('FirstController', function () {
		// todo
	})

	.controller('SecondController', function () {
		console.log('SecondController started.');

		// todo
	})

	.controller('ThirdController', function () {
		// todo
	})

	.directive('noReload', function ($location, $anchorScroll) {
		return {
			link: function (scope, elem, attrs) {
				elem.on('click', function (e) {
					e.preventDefault();
					var hash = /#.*$/.exec(attrs.href)[0].slice(1);
					$location.hash(hash);
					location.hash = hash;
					$anchorScroll();					
				});
			}
		}
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
