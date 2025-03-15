// // // // // variable (var, let, const)
var aVar = 20;
if (true) {
  var aVar = "tanvir";
  console.log(aVar);
}
var aVar = "kuttasabbir";
console.log(aVar);

let bLet = 20;
if (true) {
  let bLet = 30;
  console.log(bLet);
}
bLet = 40;
console.log(bLet);

const cConst = 60;
if (true) {
  const cConst = 50;
  console.log(cConst);
}
console.log(cConst);

// // // // // Function (arrow, default parameter, this)
function sum(x, y) {
  console.log(x + y);
}

sum(6, 2);

// arrow function
const arrowSum = (a, b) => {
  console.log(a + b);
};

arrowSum(6, 2);

const abd = (name = "") => {
  console.log("Tanvir");
  return `Hello ${name}`;
};

console.log(abd());
console.log(abd("Kola"));

// // // // // Loops (for each, for of, while)
for (let i = 1; i <= 5; i++) {
  console.log("Tanvir", i);
}

console.log("While Loop");

let wWhile = 1;
while (wWhile <= 5) {
  console.log("Tanvir", wWhile);
  wWhile++;
}

console.log("Do-While Loop");

let dDoWhile = 1;
do {
  console.log("Do-While Loop", dDoWhile);
  dDoWhile++;
} while (dDoWhile <= 0);

console.log("For Of Loop");
var strVar = [66, 664, 667, 6643, 345];
for (var val of strVar) {
  console.log("Value: ", val);
}

console.log("For in Loop");
var strVar = [66, 664, 667, 6643, 345];
for (var val in strVar) {
  console.log("Value: ", strVar[val]);
}

let obj = {
  name: "Tanvir",
  age: 20,
  cgpa: 3.98,
  isPass: true,
};
console.log("For each Loop");

for (let key in obj) {
  console.log(key, obj[key]);
}
Object.values(obj).forEach((element) => {
  console.log(element);
});
Object.entries(obj).forEach(([key, element]) => {
  console.log(`${key}: ${element}`);
});

// conditional statement (if, else, switch)
let age = 20;

if (age < 18) {
  console.log("You are a minor.");
} else if (age >= 18 && age < 60) {
  console.log("You are an adult.");
} else {
  console.log("You are a senior citizen.");
}

console.log("Switch");

let day = "Sunday";

switch (day) {
  case "Monday":
    console.log("Start of the workweek!");
    break;
  case "Friday":
    console.log("Weekend is near!");
    break;
  case "Saturday":
  case "Sunday":
    console.log("It's the weekend! 🎉");
    break;
  default:
    console.log("Just another weekday.");
}
// Operators (rest, spread)
console.log("Spread Operator");

let arr1 = [1, 2, 3, 4];
let arr2 = [...arr1, 4, 5, 6, 7];
console.log(arr2);

const car = {
  name: "BMW",
  color: "Red",
};
const modifyCar = {
  color1: "Red",
  address: "Kuril",
};
const lastUpdate = { ...car, ...modifyCar };
console.log(lastUpdate);

console.log("Rest Operator");

const numbers = [10, 20, 30, 40, 50, 60, 70];
const [r, b, c, ...rest] = numbers;
console.log(r, b, c);
console.log(rest);

// // // // // Destructure (object, array)

const car1 = ["Red", "BMW", "Kuril"];
const [, , sed] = car1;
console.log(sed);

const car2 = { color: "Red", brand: "BMW", location: "Kuril" };

const { color, brand } = car2;

console.log(color); // Output: Red
console.log(brand); // Output: BMW

// // // // // Async nature - setTimeout()
// // // // // Class & Objects
const obj2 = {
  fullName: "Tanvir",
  marks: 220,
  printMarks: function () {
    console.log("marks = ", this.marks);
  },
};
console.log(obj2.printMarks());

class ToyotaCar {
  start() {
    console.log("Start");
  }

  stop() {
    console.log("Stop");
  }

  setBrand(brand) {
    this.brandName = brand;
  }
}

let fortuner = new ToyotaCar("Lets");

fortuner.start("LEts Start");

// // // // // Array methods(filter, slice, find, concat, push, join, map)

// Example array
let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1. filter - Filters elements based on condition
let evenNumbers = numbers2.filter((num) => num % 2 === 0);
console.log("Even Numbers:", evenNumbers); // [2, 4, 6, 8, 10]

// 2. slice - Extracts a section of the array without modifying the original array
let slicedArray = numbers2.slice(2, 6); // Extracts from index 2 to 5
console.log("Sliced Array:", slicedArray); // [3, 4, 5, 6]

// 3. find - Finds the first element that satisfies the condition
let firstGreaterThanFive = numbers2.find((num) => num > 5);
console.log("First number greater than 5:", firstGreaterThanFive); // 6

// 4. concat - Combines two or more arrays into a new array
let moreNumbers = [11, 12, 13];
let combinedArray = numbers2.concat(moreNumbers);
console.log("Combined Array:", combinedArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

// 5. push - Adds new elements to the end of the array
numbers2.push(11, 12);
console.log("Array after push:", numbers); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

// 6. join - Joins all elements into a single string with a specified separator
let joinedString = numbers2.join(", ");
console.log("Joined Array:", joinedString); // "1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12"

// 7. map - Creates a new array by applying a function to each element
let doubledNumbers = numbers2.map((num) => num * 2);
console.log("Doubled Numbers:", doubledNumbers); // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24]

// Output all methods
console.log("\nFinal Numbers Array:", numbers); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
// // // // // array (methods - map, filter, reducer)
let tan = [1, 2, 3];

let has = tan.map((has) => has * 2);
console.log(has);

let newArr = tan.filter((val) => {
  return val % 2 == 0;
});
console.log(newArr);

let arr = [1, 2, 30, 4];

const output = arr.reduce((prev, curr) => {
  return prev > curr ? prev : curr;
});

console.log(output);

// // // // // call back function
let nums = [1, 2, 3];

let calcSquare = (i) => {
  console.log(i * i);
};
nums.forEach(calcSquare);
// // // Strings & numbers // // // // Template literal
let string = `This is a template literal`;
console.log(string);

console.log(string.toUpperCase());
console.log(string.toLowerCase());
console.log(string.trim());

let srting2 = "by AdV";

console.log(string.concat(srting2));
console.log(string.replace("literal", "kocu"));
console.log(string.charAt(0));

// Define some numbers
let num1 = 4.7;
let num2 = 4.2;

// ✅ Round: Rounds to the nearest integer
console.log("Round:", Math.round(num1)); // 5
console.log("Round:", Math.round(num2)); // 4

// ✅ Ceil: Rounds up to the nearest integer
console.log("Ceil:", Math.ceil(num1)); // 5
console.log("Ceil:", Math.ceil(num2)); // 5

// ✅ Floor: Rounds down to the nearest integer
console.log("Floor:", Math.floor(num1)); // 4
console.log("Floor:", Math.floor(num2)); // 4

// ✅ Random: Generates a random number between 0 and 1
console.log("Random:", Math.random()); // Example: 0.645678

// ✅ Random between 1 and 10
console.log("Random (1-10):", Math.floor(Math.random() * 10) + 1);

// ✅ Max: Returns the largest number
console.log("Max:", Math.max(10, 20, 30, -5, 100)); // 100

// ✅ Min: Returns the smallest number
console.log("Min:", Math.min(10, 20, 30, -5, 100)); // -5

// // // // // promise, async, await

console.log("Start");

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let success = true; // Change this to false to test rejection
    if (success) {
      resolve("✅ Promise resolved successfully!");
    } else {
      reject("❌ Promise rejected!");
    }
  }, 1000);
});

myPromise
  .then((message) => console.log(message))
  .catch((error) => console.log(error));
console.log("End");

console.log("Start");

async function fetchData() {
  try {
    let result = await new Promise((resolve) =>
      setTimeout(() => resolve("✅ Data fetched successfully!"), 2000)
    );
    console.log(result);
  } catch (error) {
    console.log("❌ Error:", error);
  } finally {
    console.log("Fetch completed!");
  }
}

fetchData();

console.log("End");

// // // // // Modules concepts
// // // // // Exports & defaults

// Modules in JavaScript: Exports & Defaults 🚀
// In JavaScript, modules allow you to organize your code into smaller, reusable pieces. This is especially useful for large applications. Exports and Defaults are used to expose functionality from one file to another.

// 1️⃣ Basics of Modules in JavaScript
// Modules allow us to:

// Export code from one file (e.g., functions, objects, variables).
// Import that code into another file.
// Modules can be used in browsers (via <script type="module">) or Node.js (via require() and module.exports).

// 2️⃣ Exports in JavaScript
// Exports are used to expose functionality from a module so that it can be used in other files.

// Named Exports
// You can export multiple values from a module using named exports.

// Example - Named Exports (Module1.js)
// javascript
// Copy
// Edit
// // Module1.js
// export const name = "Tanvir";
// export const age = 20;
// export function greet() {
//   return "Hello!";
// }
// Importing Named Exports (Main.js)
// javascript
// Copy
// Edit
// // Main.js
// import { name, age, greet } from './Module1.js';

// console.log(name);  // Tanvir
// console.log(age);   // 20
// console.log(greet()); // Hello!
// With named exports, you must import using the exact same names as the
