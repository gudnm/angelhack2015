var fs = require("fs"), 
express = require("express");

var config = JSON.parse(fs.readFileSync("server_config.json"));
var port = config.port;
var app = express();

app.get('/index', function(request, response) {
        var cmd = request.query.key;
	console.log("Command Received " + cmd);

        var signal = "irsend SEND_ONCE mediasonic " + cmd; 
        console.log("Executing : " + signal);
        
        exec(signal, function(error, stdout, stderr){
        if(error)
            response.send("Error sending command "+ cmd);
        else
            response.send("Successfully sent command " + cmd); 
   });
});
console.log("listening on port: "+port);
app.listen(port);
