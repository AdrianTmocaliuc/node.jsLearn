const path = require("path");
const fs = require("fs").promises;

(async () => {
  const data = await fs.readFile("./texts/data.txt", "utf-8");
  console.log("data", data);
})();

//========= fetch
// const data = fs
//   .readFile(path.resolve("../texts/data.txt"), "utf8")
//   .then(console.log)
//   .cath(console.error);
// console.log("data", data);
//========================
// fs.readFile(path.resolve("../texts/data.txt"), "utf8", (error, data) => {
//   // fs.readFile("../package.json", "utf8", (error, data) => {
//   if (error) {
//     console.log("error", error);
//   }
//   console.log("data", data);
// });
//=========================

// console.log(path.resolve("dateUtils.js"));

// console.log("functions");

function getFunctions() {}

module.exports = getFunctions;
