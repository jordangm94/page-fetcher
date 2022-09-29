const fs = require('fs');

const args = process.argv.slice(2);

const url = args[0];

const path = args[1];

const request = require('request');

request(url, (error, response, body) => {
  if (error) {
    return error;
  }
  console.log(`No error thrown. Let's get started.`)

  let print = body;

  let fileSize = print.length;

  console.log("Beginning file writing");

  fs.writeFile(path, print, err => {
    if (err) {
      console.error(err);
    }
  });
  console.log(`Downloaded and saved ${fileSize} bytes to ./index.html`);
});

