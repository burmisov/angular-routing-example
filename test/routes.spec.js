// Зависимости - модули
var express = require('express');
var request = require('supertest');

// Тестируемые модули
var routes = require('../routes');
var setup = require('../appsetup');

describe('HTTP-сервер', function () {
	var app = express();
	setup(app);
	routes(app);

	it('должен выдавать страницу по корневому адресу', function (done) {
		request(app)
			.get('/')
			.expect(200)
			.expect('Content-Type', /html/)			
			.end(function (err, res) {
				expect(err).toBe(null);
				done();
			});
	});

	it('должен выдавать страницу по допустимому адресу (second)', function (done) {
		request(app)
			.get('/second')
			.expect(200)
			.expect('Content-Type', /html/)
			.end(function (err, res) {
				expect(err).toBe(null);
				done();
			});
	});

	it('должен выдавать 404 по недопустимому адресу', function (done) {
		request(app)
			.get('/other')
			.expect(404)
			.end(function (err, res) {
				expect(err).toBe(null);
				done();
			});
	});

	it('должен выдавать partial-шаблон (first))', function (done) {
		request(app)
			.get('/partials/first')
			.expect(200)
			.expect('Content-Type', /html/)
			.end(function (err, res) {
				expect(err).toBe(null);
				done();
			});
	});
});
