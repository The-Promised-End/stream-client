const https = require('https');

function getHTML (host, path, callback) {

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
function printHTML(html) {
  console.log(html)
}
getHTML('sytantris.github.io', '/http-examples/step4.html', printHTML);