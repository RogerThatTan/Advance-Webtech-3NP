const { read } = require("fs");
const fs = require("fs/promises");
const path = require("path");
const fileName = "asyncFile.txt";
const filePath = path.join(__dirname, fileName);

const filePath1 = __dirname;

fs.promises
  .readdir(filePath1)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

const readFolder = async () => {
  try {
    const res = await fs.promises.readdir(filePath1);
    console.log(res);
  } catch (error) {
    console.error(error);
  }
};
readFolder();

//create file
const writeFileExample = async () => {
  try {
    await fs.writeFile(filePath, "This is the intial data", "utf-8");
    console.log("File Created Succesffuly");
  } catch (error) {
    console.error(error);
  }
};

// writeFileExample();

// read file
const readFileExample = async () => {
  try {
    const data = await fs.readFile(filePath, "utf-8");
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};
readFileExample();

//append file

const appendFileExample = async () => {
  try {
    await fs.appendFile(filePath, "\nThis is the append file", "utf-8");
    console.log("File Appened successfully");
  } catch (error) {
    console.error(error);
  }
};

appendFileExample();

//delete file

const deleteFileExample = async () => {
  try {
    await fs.unlink(filePath);
    console.log("File Deleted Successfully");
  } catch (error) {
    console.error("Error deletting file: ", error.message);
  }
};

deleteFileExample();
