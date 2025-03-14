const fs = require("fs");
const path = require("path");

const fileName = "fspromisesnew.txt";
const filePath = path.join(__dirname, fileName);

// const filePath1 = __dirname;
// fs.promises
//   .readdir(filePath1)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

//lets do CRUD operation using promises

//write file
fs.promises
  .writeFile(filePath, "This is intial data", "utf-8")
  .then(console.log("File is created successfully"))
  .catch((err) => console.log(err));

//read file

fs.promises
  .readFile(filePath, "utf-8")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

//append file
fs.promises
  .appendFile(filePath, "\nThis is append data", "utf-8")
  .then(console.log("Data is appended successfully"))
  .catch((err) => console.log(err));

//Delete file

fs.promises
  .unlink(filePath)
  .then(console.log("File is deleted successfully"))
  .catch((err) => console.log(err));

// rename file

const newFileName = "fspromises.txt";
const newFilePath = path.join(__dirname, newFileName);
fs.promises
  .rename(filePath, newFilePath)
  .then(console.log("File is renamed successfully"))
  .catch((err) => console.log(err));
