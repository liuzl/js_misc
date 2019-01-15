var nf = nf || {};
var fmr = fmr || {};

fmr.list = function() {
    //console.log(JSON.stringify(arguments));
    var arr = Array.prototype.slice.call(arguments);
    //console.log(JSON.stringify(arr));
    return arr;
}

fmr.entity = fmr.list;

nf.company = function(loc, name, type, scope) {
    return {"loc":loc, "name":name, "type":type, "scope":scope};
}

module.exports = {
    nf: nf,
    fmr: fmr
};
