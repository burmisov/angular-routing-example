var validRoutes = ['', 'second', 'third'];

module.exports = function (app) {
	app.get('/', function (req, res) {
		res.render('index');
	});

	app.get('/:route', function (req, res) {
		if (validRoutes.indexOf(req.params.route) > -1) {
			res.render('index');
		} else {
			res.send(404, 'not found. (' + res.locals.applMdPath + ')');
		}
	});

	app.get('/partials/:partial', function (req, res) {
		res.render('partials/' + req.params.partial);
	});
};
