var debug = require('debug')('index');

var express = require('express');
var morgan = require('morgan');
var serveStatic = require('serve-static');
var path = require('path');

var iisBaseUrl = require('iis-baseurl');

var app = express();

app.set('view engine', 'jade');

app.use(morgan('dev'));

app.use(iisBaseUrl());
app.use(function (req, res, next) {
	res.locals.applMdPath = req.header('x-iisnode-appl_md_path');
	next();
});

app.use(serveStatic(path.join(process.cwd(), 'static')));

require('./routes')(app);

var port = process.env.PORT || 4080;
app.listen(port);

console.log('Server listening on port', port);
