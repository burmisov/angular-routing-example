var debug = require('debug')('index');

var express = require('express');
var morgan = require('morgan');
var serveStatic = require('serve-static');
var path = require('path');

var app = express();

app.use(morgan('dev'));
app.use(serveStatic(path.join(process.cwd(), 'static')));

require('routes')(app);

var port = process.env.PORT || 4080;
app.listen(port);

console.log('Server listening on port', port);
