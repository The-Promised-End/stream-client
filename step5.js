var getHTML = require('./http-functions');


function printHTML (html) {
  console.log(html);
}

getHTML('sytantris.github.io','/http-examples/step5.html', printHTML)