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

	it('должен открывать маршрут при щелчке по ссылке', function () {
		browser.get('/');
		var linkToSecond = element(by.linkText('Second view'));
		linkToSecond.click();
		var rootHeader = element(by.css('div[ng-view]')).element(by.tagName('h3'));
		expect(rootHeader.getText()).toContain('second template');
	});

	it('должен позволять скролл при щелчке на хэш-ссылку', function (done) {
		browser.get('/second');
		var getPositionScript = "return document.body.scrollTop";
		browser.executeScript(getPositionScript).then(function (scrollPosBefore) {
			var linkToSecondHash = element(by.linkText('Dolor sit amet'));
			linkToSecondHash.click();
			browser.executeScript(getPositionScript).then(function (scrollPosAfter) {
				expect(scrollPosAfter).toBeGreaterThan(scrollPosBefore);
				done();
			});
		});
	});

	it('должен осуществлять скролл при прямом переходе на хэш-ссылку', function (done) {
		browser.get('/second');
		var getPositionScript =
			"var callback = arguments[arguments.length - 1];" +
			"setTimeout(function () {" + 
			"  callback(document.body.scrollTop);" +
			"}, 1000);";
		browser.executeAsyncScript(getPositionScript).then(function (scrollPosBefore) {
			var linkToSecondHash = element(by.linkText('Dolor sit amet'));
			linkToSecondHash.click();
			browser.executeAsyncScript(getPositionScript).then(function (scrollPosAfter) {
				expect(scrollPosAfter).toBeGreaterThan(scrollPosBefore);
				browser.get('/second#dolorSitAmet').then(function () {
					browser.executeAsyncScript(getPositionScript).then(function (scrollPosDirect) {
						console.log('>>>', scrollPosDirect, scrollPosAfter);
						expect(scrollPosDirect).toEqual(scrollPosAfter);
						done();
					});
				});
			});
		});
	});

	it('должен правильно переходить после хэш-ссылки на обычную', function () {
		browser.get('/second');
		browser.setLocation('/second#dolorSitAmet');
		var linkToThird = element(by.linkText('Third view'));
		linkToThird.click();
		var rootHeader = element(by.css('div[ng-view]')).element(by.tagName('h3'));
		expect(rootHeader.getText()).toContain('third template');
	});
});
