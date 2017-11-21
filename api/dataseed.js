var AWS = require('aws-sdk');
AWS.config.update({
    region:'us-east-1'
});
/*
var dynamoose = require('dynamoose');

dynamoose.local();

var List = require('./models/list');

var apples = new List({
    short: 'Apples',
    long: 'Pick up apples from Whole Foods',
    done: false
});

apples.save();*/