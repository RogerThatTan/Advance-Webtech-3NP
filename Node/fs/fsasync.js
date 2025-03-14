const fs = require("fs");
const path = require("path");
const fileName = "fsasync.txt";
const filePath = path.join(__dirname, fileName);

//write file

fs.writeFile(filePath, "This is intial data", "utf-8", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File is created successfully");
  }
});

//read file

fs.readFile(filePath, "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

//append file

fs.appendFile(filePath, "\nThis is append data", "utf-8", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Data is appended successfully");
  }
});

//delete file

fs.unlink(filePath, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File is deleted successfully");
  }
});

//rename file
const newFileName = "fsasyncnew.txt";
const newFilePath = path.join(__dirname, newFileName);
fs.rename(filePath, newFilePath, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File is renamed successfully");
  }
});
