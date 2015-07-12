var fs = require("fs"), 
	express = require("express");

var config = JSON.parse(fs.readFileSync("server_config.json"));
var port = config.port, host = config.host;
var app = express();

app.get('/index', function(request, response) {
	response.send("Hello!");
	console.log(request.query.command);
});

app.listen(port, host);