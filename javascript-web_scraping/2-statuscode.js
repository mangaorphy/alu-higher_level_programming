#!/usr/bin/node
const request = require('request');

const url = process.argv[2];

request.get(url, (error, response) => {
  if (error) {
    console.log('An error occurred: ', error);
  } else {
    console.log('Code: ', response.statusCode);
  }
});
