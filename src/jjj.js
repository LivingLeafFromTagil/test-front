
import { writeFile } from "fs";

let someData = [{name: 'adman', tag: 'batsman', age: 25}];
let jsonData = JSON.stringify(someData);
let codeStr = `const cricketers = ${jsonData}; module.exports = cricketers;`;
writeFile("orgInfo.js", codeStr, 'utf8', function(err) {
  if (err) {
    return console.log(err);
  }
  console.log("The file was saved!");
});