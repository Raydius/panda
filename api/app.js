/**
 * RESTful API Boilerplate using Restify
 *
 * @author Ray Dollete <ray@raydollete.com>
 */

const restify = require('restify');

// create server
const server = restify.createServer();

// CORS config
const corsMiddleware = require('restify-cors-middleware');

const cors = corsMiddleware({
    // preflightMaxAge: 5,
    origins: ['http://localhost:5000','http://127.0.0.1'],
    allowHeaders: ['API-Token'],
    exposeHeaders: ['API-Token-Expiry']
});

server.pre(cors.preflight);
server.use(cors.actual);

// routes
const list = require('./controllers/list');
server.get('/', list.getList);

// start listening
server.listen(8080, function() {
	console.log('%s listening at %s', server.name, server.url);
});
