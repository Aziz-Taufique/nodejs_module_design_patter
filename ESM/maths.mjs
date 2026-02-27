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

export function sqrt(num){ // named export
    return Math.sqrt(num);
}

export default function rand(num){ // default export
    return Math.random()*10;
}

// module.exports = div; // default exports
// export default div;
// module.exports.add = add; // named export
// module.exports.sub = sub;
// module.exports.mul = mul;
