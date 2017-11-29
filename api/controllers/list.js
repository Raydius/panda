/**
 * RESTful Controller Methods for List
 *
 * @author Ray Dollete <ray@raydollete.com>
 */

// AWS key credentials will be pulled from environment variables
const credentials = {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: 'us-east-1'
};

// connect to DynamoDB container
const dynasty = require('dynasty')(credentials, 'http://dynamo:8000');

const List = dynasty.table('List');

// method to get entire list of tasks
exports.getList = function(req, res, next) {

    List.scan().then(function(tasks) {
        res.send(tasks);
        next();
    }).catch(function(err) {
        res.send(err);
        next();
    });

};

// method to add a single task
exports.addTask = function(req, res, next) {

    // get desc from form body element "short"
    let shortDesc = req.body.short;

    // description has to be at least 1 character
    if(shortDesc.length < 1) {
        next();
    }

    List.insert({ short: shortDesc }).then(function(resp) {
       res.send(resp);
       next();
    }).catch(function(err) {
       res.send(err);
       next();
    });

};

// method to delete a single task
exports.delTask = function(req, res, next) {

    let short = req.params.short;

    List.remove(hash).then(function(resp) {
        res.send(resp);
        next();
    }).catch(function(err) {
        res.send(resp);
        next();
    });

};

exports.doneTask = function(req, res, next) {



};