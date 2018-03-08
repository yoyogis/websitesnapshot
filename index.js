/*var page = require('webpage').create();
page.open('http://mi.com/', function() {
  page.render('mi.png');
  phantom.exit();
});*/


var page = require('webpage').create();
page.viewportSize = { width: 400, height : 400 };
page.content = '<html style="background-color:black; color:white"><body><h1>Hello world</h1></body></html>';

page.render('html.pdf');
phantom.exit();