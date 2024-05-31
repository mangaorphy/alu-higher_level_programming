#!/usr/bin/node
let argument = 0;

exports.logMe = function (item) {
    console.log(argument + ': ' + item);
    argument++;
};