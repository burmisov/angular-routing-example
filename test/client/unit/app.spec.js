describe('Приложение Angular-Routing-Example', function () {
	it('должно содержать глобальные переменные jQuery', function () {
		expect(window.jQuery).toBeDefined();
		expect(window.$).toBeDefined();
	});

	it('должно содержать глобальную переменную angular', function () {
		expect(window.angular).toBeDefined();
	});

	it('должно без ошибок загружать свой модуль', function () {
		function loadModule() {
			angular.module('ngRoutingExample');
		}

		expect(loadModule).not.toThrow();
	});
});
