describe('Маршрутизатор на базе ng-route', function () {
	it('должен открывать корневой маршрут по умолчанию', function () {
		browser.get('/');
		var rootHeader = element(by.css('div[ng-view]')).element(by.tagName('h3'));
		expect(rootHeader.getText()).toContain('first template');
	});

	it('должен открывать вторичный маршрут по прямой ссылке', function () {
		browser.get('/second');
		var rootHeader = element(by.css('div[ng-view]')).element(by.tagName('h3'));
		expect(rootHeader.getText()).toContain('second template');
	});

	it('должен открывать вторичный маршрут при внутреннем переходе', function () {
		browser.get('/');
		browser.setLocation('/second');
		var rootHeader = element(by.css('div[ng-view]')).element(by.tagName('h3'));
		expect(rootHeader.getText()).toContain('second template');
	});

	it('должен оставаться на вторичной странице при обновлении (refresh)', function () {
		browser.get('/');
		browser.setLocation('/second');
		var rootHeader = element(by.css('div[ng-view]')).element(by.tagName('h3'));
		expect(rootHeader.getText()).toContain('second template');
		browser.navigate().refresh();
		var rootHeaderAfterRefresh = element(by.css('div[ng-view]')).element(by.tagName('h3'));
		expect(rootHeaderAfterRefresh.getText()).toContain('second template');
	});
});
