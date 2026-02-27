const foo = setTimeout(function () {
    console.log("compute time")
}, 10000)

console.log(foo) // Inside browser the return type of an setTimeout is not an object but it's a random number
clearTimeout(foo) // here the clearTimerout taking an object but in browser it taking a number to ckear the setTimeout

// So, moral of the story different runtimes can have different set of implementation of the same features.