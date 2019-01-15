var lib = require("./company.js"),
    nf = lib.nf,
    fmr = lib.fmr;
var ret = 'var obj = nf.company(fmr.entity("loc_county", fmr.list("330523")), "德新塑料配件", "厂")';
console.log(ret)
eval(ret);
console.log(JSON.stringify(obj));
