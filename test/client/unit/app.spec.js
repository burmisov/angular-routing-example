/*globals angular, jQuery, $ */

describe('Приложение Angular-Routing-Example', function () {
	it('должно содержать глобальные переменные jQuery', function () {
		expect(jQuery).toBeDefined();
		expect($).toBeDefined();
	});

	it('должно содержать глобальную переменную angular', function () {
		expect(angular).toBeDefined();
	});

	it('должно без ошибок загружать свой модуль', function () {
		function loadModule() {
			angular.module('ngRoutingExample');
		}

		expect(loadModule).not.toThrow();
	});
});
