#!/usr/bin/node

// this script is to write to a file

const fs = require('fs');
const filePath = process.argv[2];
const content = process.argv[3];
fs.writeFile(filePath, content, err => {
  if (err) {
    console.error(err);
  }
});
