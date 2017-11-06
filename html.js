const https = require('https');

function getAndPrintHTML () {

  const requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
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


};

getAndPrintHTML();