/**
 * RESTful API Boilerplate using Restify
 *
 * @author Ray Dollete <ray@raydollete.com>
 */

const restify = require('restify');

// create server
const server = restify.createServer();

// variable handling
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser({
    maxBodySize: 0,
    mapParams: true,
    mapFiles: false,
    overrideParams: false,
    multipartHandler: function(part) {
        part.on('data', function(data) {
            file_contents = data;
        });
    },
    multipartFileHandler: function(part) {
        part.on('data', function(data) {
            file_contents = data;
        });
    },
    keepExtensions: false,
    //uploadDir: os.tmpdir(),
    multiples: true,
    hash: 'sha1'
}));

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

// get full list of tasks
server.get('/', list.getList);
// add a new task
server.post('/addTask', list.addTask);



// start listening
server.listen(8080, function() {
	console.log('%s listening at %s', server.name, server.url);
});
