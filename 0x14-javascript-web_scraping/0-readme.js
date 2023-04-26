#!/usr/bin/node

// this script is written to read a file

const fs = require('fs');
const filePath = process.argv[2];
fs.readFile(filePath, 'utf-8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
