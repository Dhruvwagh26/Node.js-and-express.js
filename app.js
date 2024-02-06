// Modules - Encapsulated Code (which only shares minimum)
//CommonJS, every file is module (by default) in node.js

const names = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternative-flavor");
console.log(data);
// console.log(names);
sayHi("dhruv");
sayHi(names.dhruv1);
sayHi(names.dhruv3);
