// const searchFunction = require("./serarching")
// const {linearSearch, binarySearch} = require("./serarching")
// const { add, sub, mul} = require("./maths") // named exports
// const div = require("./maths") // default expors

import searchFunction from "./serarching.js"
import div from "./maths.mjs"
// import  {sqrt} from "./maths.mjs"
// import rand from "./maths.mjs"
import rand, {sqrt} from "./maths.mjs"

import * as foo from "./maths.mjs"

console.log(searchFunction.linearSearch([23, 422, 12, 11, 1], 0))

console.log(searchFunction.binarySearch([1, 2, 3, 4, 5], 4))

// console.log(add(2, 3))
// console.log(sub(2, 3))
// console.log(mul(2, 3))
console.log(div(2, 2))
console.log(sqrt(9))
console.log(rand())
console.log(foo)