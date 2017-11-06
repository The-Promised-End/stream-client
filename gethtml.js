const https = require('https');

function getHTML (host, path, callback) {

  const requestOptions = {
    host: host
    path: path
  };

function printHTML(html) {
  console.log(html)
}

  https.get(requestOptions, function (response) {

    response.setEncoding("utf8");

    let responseBodyString = '';

    response.on('data', function (chunk) {

      responseBodyString += chunk;
    });

    response.on('end', function() {

      console.log(responseBodyString);

    });

  });
};

getAndPrintHTML();