const https = require('https');

function getAndPrintHTML (host, path) {

  const requestOptions = {
    host: host
    path: path
  };

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