var exec = require('child_process').exec,
    child;
    
child = exec("ls", function(error, stdout, stderr){
    console.log('stdout: ' + stdout);
});
