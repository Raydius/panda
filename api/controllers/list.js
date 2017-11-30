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
exports.clearTasks = function(req, res, next) {

    let doneArray = req.body.doneArray;
    let remaining = doneArray.length;

    // create a promise function that will resolve when a record is removed from the dynamoDB
    let removeOne = function(shortName) {

        return new Promise(function (resolve, reject) {
            List.remove(shortName).then(function(resp) {
                resolve(resp);
            }).catch(function(err) {
                // handle error
            });
        });
    };

    // create a promise function that will process an array of records
    let batchRemove = function(doneArray, remaining) {
        return new Promise(function(resolve, reject) {

            // if no more records to process...
            if(remaining === 0) {
                // resolve the promise...
                resolve(doneArray);
            }
            // if there are records to process...
            else {
                // get the shortName value from doneArray
                let index = remaining - 1;
                let shortName = doneArray[index];

                // remove this record...
                removeOne(shortName).then(function (resp) {
                    // resolve this instance of the batchRemove promise, but start a new one with one less counter...
                    resolve(batchRemove(doneArray, remaining - 1));
                });
            }
        });

    };

    // execute the sequence
    batchRemove(doneArray, remaining).then(function(doneArray) {
        // and output the http response
        res.send({
            status: 'Completed',
            data: doneArray
        });
    });

};

exports.doneTask = function(req, res, next) {

    List.update({ hash: req.params.short }, { done: req.body.done }).then(function(resp) {

        res.send({
            status: 'Updated',
            short: req.params.short,
            done: req.body.done,
            message: resp
        });
        next();

    }).catch(function(err) {
        res.send(err);
        next();
    });

};