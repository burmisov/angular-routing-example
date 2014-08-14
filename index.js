var debug = require('debug')('index');

var express = require('express');
var app = express();

require('./appsetup')(app);
require('./routes')(app);

var port = process.env.PORT || 4080;

debug('try to listen on port ' + port + ' ...');
app.listen(port);

console.log('Server listening on port', port);
