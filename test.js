
var Myo = require('myo');
var http = require("http");

var myMyo = Myo.create();

myMyo.on('wave_out', function(edge){
        myMyo.unlock(30000);
});

var options = {
	hostname: "127.0.0.1",
	port: 1337,
	path: "/index?command=channel_up",
	headers: {"command": "channel_up"},
	method: "GET"
};

var i =0;
myMyo.on('fist', function(edge){
    if(!edge) return;
	var request = http.request(options, function(res) {
/*		var body = "";
		res.on("data", function(chunk) {
			body += chunk;
		});
		res.on("end", function() {
			console.log(body);
		});*/
	});
i++;
console.log(i);
	request.end();


//	console.log(request);
    myMyo.vibrate();

});


