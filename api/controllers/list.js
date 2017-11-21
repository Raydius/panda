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

const dynasty = require('dynasty')(credentials, 'http://dynamo:8000');

const List = dynasty.table('List');

exports.getList = function(req, res, next) {

    List.scan().then(function(tasks) {
        res.send(tasks);
        next();
    }).catch(function(err) {
        res.send(err);
        next();
    });

};

exports.addTask = function(req, res, next) {



};