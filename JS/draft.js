// // // // Modules concepts
// // // // Exports & defaults

Modules in JavaScript: Exports & Defaults 🚀
In JavaScript, modules allow you to organize your code into smaller, reusable pieces. This is especially useful for large applications. Exports and Defaults are used to expose functionality from one file to another.

1️⃣ Basics of Modules in JavaScript
Modules allow us to:

Export code from one file (e.g., functions, objects, variables).
Import that code into another file.
Modules can be used in browsers (via <script type="module">) or Node.js (via require() and module.exports).

2️⃣ Exports in JavaScript
Exports are used to expose functionality from a module so that it can be used in other files.

Named Exports
You can export multiple values from a module using named exports.

Example - Named Exports (Module1.js)
javascript
Copy
Edit
// Module1.js
export const name = "Tanvir";
export const age = 20;
export function greet() {
  return "Hello!";
}
Importing Named Exports (Main.js)
javascript
Copy
Edit
// Main.js
import { name, age, greet } from './Module1.js';

console.log(name);  // Tanvir
console.log(age);   // 20
console.log(greet()); // Hello!
With named exports, you must import using the exact same names as the
