
var Myo = require('myo');
var http = require("http");

var myMyo = Myo.create();

myMyo.on('connect', function(edge){
	myMyo.unlock(1);
});

var options = {
	hostname: "169.254.58.228",
	port: 1337,
	path: "/index?key=",
	method: "GET"
};

myMyo.on('fist', function(edge){
    if(!edge) return;
    options.path += "KEY_POWER";
	var request = http.request(options, function(res) {});
	request.end();
console.log(request);
console.log("KEY_POWER");
    myMyo.vibrate();
});

myMyo.on('spread', function(edge){
    if(!edge) return;
    options.path += "KEY_POWER";
	var request = http.request(options, function(res) {});
	request.end();

    myMyo.vibrate();
});

myMyo.on('wave_in', function(edge){
    if(!edge) return;
    options.path += "KEY_CHANNELDOWN";
	var request = http.request(options, function(res) {});
	request.end();

    myMyo.vibrate();
});

myMyo.on('wave_out', function(edge){
    if(!edge) return;
    options.path += "KEY_CHANNELUP";
	var request = http.request(options, function(res) {});
	request.end();

    myMyo.vibrate();
});

