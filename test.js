
var Myo = require('myo');
var http = require("http");

var myMyo = Myo.create();

myMyo.on('connected', function(){
	myMyo.unlock();
});

var options = {
	hostname: "169.254.58.228",
	port: 1337,
	method: "GET"
};

myMyo.on('fist', function(edge){
    if(!edge) return;
	myMyo.unlock(30000);
    console.log("fist == power off");
    options.path = "/index?key=KEY_POWER";
	var request = http.request(options, function(res) {});
	request.end();

    myMyo.vibrate();
});

myMyo.on('fingers_spread', function(edge){
    if(!edge) return;
	myMyo.unlock(30000);
    console.log("spread == power on");
    options.path = "/index?key=KEY_POWER";
	var request = http.request(options, function(res) {});
	request.end();

    myMyo.vibrate();
});

myMyo.on('wave_in', function(edge){
    if(!edge) return;
	myMyo.unlock(30000);
    console.log("wave_in == channel down");
    options.path = "/index?key=KEY_CHANNELDOWN";
	var request = http.request(options, function(res) {});
	request.end();

    myMyo.vibrate();
});

myMyo.on('wave_out', function(edge){
    if(!edge) return;
	myMyo.unlock(30000);
    console.log("wave_out == channel up");
    options.path = "/index?key=KEY_CHANNELUP";
	var request = http.request(options, function(res) {});
	request.end();

    myMyo.vibrate();
});

