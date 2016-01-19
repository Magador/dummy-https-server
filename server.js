var https = require('https');
var fs = require('fs');

var options = {
  key: fs.readFileSync('certs/key.pem'),
  cert: fs.readFileSync('certs/cert.pem')
};

var a = https.createServer(options, function (req, res) {
  res.writeHead(200);
  res.end("This is the first server");
}).listen(8001);
