var https = require('https');

module.exports = function getHTML (host, path, callback) {

  const requestOptions = {
    host: host,
    path: path
  };



  https.get(requestOptions, function (response) {

    response.setEncoding("utf8");

    let responseBodyString = '';

    response.on('data', function (chunk) {

      responseBodyString += chunk;
    });

    response.on('end', function() {
   callback(responseBodyString);


    });

  });
};