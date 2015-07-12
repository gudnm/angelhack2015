var fs = require("fs"), 
	express = require("express");

var config = JSON.parse(fs.readFileSync("server_config.json"));
var port = config.port;
var app = express();

app.get('/index', function(request, response) {
	response.send("Hello!");
	console.log(request.query.command);
});
console.log("listening on port:"+port);
app.listen(port);
