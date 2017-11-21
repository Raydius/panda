/**
 * RESTful Controller Methods for List
 *
 * @author Ray Dollete <ray@raydollete.com>
 */

exports.getList = function(req, res, next) {

    var list = [
        {
            short: 'apples',
            long: 'get apples from the grocery store',
            done: false
        },
        {
            short: 'oranges',
            long: 'get oranges from the grocery store',
            done: false
        }
    ];

    res.send(list);
    next();
};
