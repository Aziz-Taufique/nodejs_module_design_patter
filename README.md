# module design pattern

module is a mechanism for splitting js program into seprates managable chunk called as module that can be imported whenever needed.

## In nodejs in order to prepare this kind of module we have two mechanism**
1. CJS (common js modules).
2. ESM or ES6 (ecma script/ecma script 6 modules).

NOTE: By default nodejs treat as cjs
NOTE: a modulle cannot have more then 1 default export
default export is always imported as alias, but named export are not.

### Thired party module 
- like `npm i express`, `npm i dotenv`, etc.