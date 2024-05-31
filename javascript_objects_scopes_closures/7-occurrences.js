#!/usr/bin/node

exports.nbOccurences = function (list, searchElement) {
    let count = o;

    for (let i = 0; i < list.length; i++) {
        if (list[i] === searchElement) {
            count++
        }
    }
    return count;
}