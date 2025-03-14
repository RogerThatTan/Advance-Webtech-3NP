const fs = require("fs");
const path = require("path");
const fileName = "test.txt";
const filePath = path.join(__dirname, fileName);

//write file
// const writeFile = fs.writeFileSync(filePath, "Hello World!", "utf-8");

// console.log(writeFile);

// Read file

// const readFile = fs.readFileSync(filePath, "utf-8");
// // console.log(readFile);  //binary format output
// // console.log(readFile.toString()); //string format output
// console.log(readFile); // now we didnt convert as we used utf-8 in readFile , before we didnt use.

//Append File

// const appendFile = fs.appendFileSync(
//   filePath,
//   "\nHello World!,This is append version of the append file",
//   "utf-8"
// );
// console.log(appendFile);

//Delete File which is unlink file

// const fileDelete = fs.unlinkSync(filePath);
// console.log(fileDelete);

//Rename File
const newUpdatedFileName = "updateTest.txt";
const newFilePath = path.join(__dirname, newUpdatedFileName);
const renameFile = fs.renameSync(filePath, newFilePath);
console.log(renameFile);
