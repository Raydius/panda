/**
 * RESTful API Boilerplate using Restify
 *
 * @author Ray Dollete <ray@raydollete.com>
 */

const restify = require('restify');

const list = require('./controllers/list');

// create server
const server = restify.createServer();

// routes
server.get('/', list.getList);

// start listening
server.listen(8080, function() {
	console.log('%s listening at %s', server.name, server.url);
});
