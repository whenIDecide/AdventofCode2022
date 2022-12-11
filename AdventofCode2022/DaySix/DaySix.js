const fs = require("fs");

const input = fs.readFileSync("storage.txt", "utf8");

inputArray = input.split("");


for (let i = 0; i < input.length; i++) {
  let temp = inputArray.slice(i, (i + 14));
  let isUnique = [...new Set(temp)];
  if (isUnique.length == 14) {
    console.log(i + 14);
    break;
  }

};