// const add = require("./math");

// const { add, mult, subs, div, PI } = require("./math");
// const math = require("./math");

import multiply from "./math.js"; // i can name it different form the source because it is default where the div is not just below
// import { div } from "./math.js"; //named export

import { add, mult, subs, div, PI } from "./math.js"; // all export together
import * as math from "./math.js"; // all export together as alias
// console.log(math.add(5, 10));
console.log(multiply(500, 10));
// console.log(math.subs(5, 10));
console.log(div(5, 10));
// console.log(math.PI);
