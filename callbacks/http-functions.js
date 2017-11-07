const https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

module.exports = function getHTML(options, callback) {

  https.get(options, function (response) {
    let responseString = '';
    response.setEncoding('utf8');
    response.on('data', function (data) {
      responseString += data;
    });

    response.on('end', function () {
      callback(responseString);
    });
  });
};

function printHTML(html) {
  console.log(html);
}