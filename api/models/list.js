/**
 * Model definition for to-do list
 *
 * @author Ray Dollete <ray@raydollete.com>
 */

const dynamoose = require('dynamoose');

let Schema = dynamoose.Schema;

let ListSchema = new Schema({
    short: String,
    long: String,
    done: Boolean,
    due: [Date]
});

module.exports = dynamoose.model('List', ListSchema);