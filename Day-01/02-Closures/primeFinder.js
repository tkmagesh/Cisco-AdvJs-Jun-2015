function getPrimeFinder(){
    var cache = {};
    function checkPrime(n){
        console.log("processing ", n);
        if (n <= 3) return true;
        for(var i=2; i <= (n/2); i++){
            if (i % n === 0) return false;
        }
        return true;
    }

    return function (n){
        if (typeof cache[n] === "undefined")
            cache[n] = checkPrime(n);
        return cache[n];
    }
}

function checkPrime(n){
    console.log("processing ", n);
    if (n <= 3) return true;
    for(var i=2; i <= (n/2); i++){
        if (i % n === 0) return false;
    }
    return true;
}
function memoize(fn){
    var cache = {};
    return function (){
        var key = arguments[0];
        if (typeof cache[key] === "undefined")
            cache[key] = fn.apply(this, arguments);
        return cache[key];
    }
}
var primeFinder = memoize(checkPrime);

function memoize(fn, keyGenerator){
    var cache = {};
    if (!keyGenerator)
        keyGenerator = function(){
           return JSON.stringify(arguments);
        }
    return function (){
        var key = keyGenerator.apply(this,arguments);
        if (typeof cache[key] === "undefined")
            cache[key] = fn.apply(this, arguments);
        return cache[key];
    }
}
