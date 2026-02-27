function add(a, b){
    return a +b;
}

function sub(a, b){
    return a-b;
}

function mul(a, b){
    return a*b;
}

function div(a, b){
    return a/b;
}

module.exports = div; // default exports
module.exports.add = add; // named export
module.exports.sub = sub;
module.exports.mul = mul;
