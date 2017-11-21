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

    let shortDesc = req.body.short;
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

    let taskId = req.params.taskId;
    let hash = req.body.hash;

    List.remove(hash).then(function(resp) {
        res.send(resp);
        next();
    }).catch(function(err) {
        res.send(resp);
        next();
    });

};