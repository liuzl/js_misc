var fs = require('fs');
var readline = require('readline');

console.log(__dirname);

var rl = readline.createInterface({
    input : fs.createReadStream(__dirname + '/test.txt'),
    output: process.stdout,
    terminal: false
});

rl.on('line',function(line){
    console.log(line) //or parse line
});

