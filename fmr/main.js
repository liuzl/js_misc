var lib = require("./company.js"), nf = lib.nf, fmr = lib.fmr;
var http = require('http');
var qs = require('querystring');
var fs = require('fs');
var readline = require('readline');

//console.log(__dirname);

var rl = readline.createInterface({
    input: fs.createReadStream(__dirname + '/company.txt'),
    output: process.stdout,
    terminal: false
});

var parse = function(line) {
    //var req = {nl:"深圳市花样年华有限公司"};
    var req = {nl: line};
    http.get('http://127.0.0.1:8080/fmr/?'+qs.stringify(req), function (res) {
        var size = 0;
        var chunks = [];
        res.on("data", function(chunk) {
            size += chunk.length; chunks.push(chunk);
        });
        res.on('end', function() {
            var data = Buffer.concat(chunks, size).toString();
            var ret = JSON.parse(data);
            if (ret.status != "ok") {
                console.log("error: " + data.toString());
                return;
            }
            for (var i = 0; i < ret.message.length; i++) {
                //console.log(ret.message[i]);
                eval("var o = " + ret.message[i]);
                console.log(line+"\t"+JSON.stringify(o));
            }
        }).on('error', function(e) {
            console.log(e);
        });
    });
};

rl.on('line', parse);

/*
var ret = 'nf.company(fmr.entity("loc_county", fmr.list("330523")), "德新塑料配件", "厂")';
console.log(ret)
eval("var o = " + ret);
console.log(o);
*/
