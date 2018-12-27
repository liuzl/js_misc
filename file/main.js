var fs = require('fs');

console.log(__dirname);

var ws = fs.createWriteStream(__dirname + '/test.txt');
for (var i = 0; i < 10000; i++) {
    var w_flag = ws.write(i.toString()+"\n");
    //当缓存区写满时，输出false
    //console.log(w_flag);
}

