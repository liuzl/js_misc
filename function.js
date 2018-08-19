var nf = nf || {};

nf.list = function() {
    console.log(arguments.length);
    var arr = [];
    for (var i = 0; i < arguments.length; i++) {
        arr.push(arguments[i]);
    }
    return arr;
}

var ints = nf.list(1,2,3);
console.log(ints);

var strs = nf.list("one", "two", "three");
console.log(strs);
