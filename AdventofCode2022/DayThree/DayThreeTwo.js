const fs = require("fs");

const packages = fs.readFileSync("packages.txt", "utf8")
.replace(/\r/g,"")
.split("\n");


let score = 0;
for (let i = 0; i < packages.length; i = i + 3) {
        for (let e = 0; e < (packages[i]).length; e++) {
            let c = 0;
            if (packages[i + 1].includes(packages[i][e]) && packages[i + 2].includes(packages[i][e])){
                if (packages[i][e] == packages[i][e].toUpperCase(0)) {
                    score += (packages[i][e].charCodeAt(0) - 38);
                }
                else {
                    score += (packages[i][e].charCodeAt(0) - 96);
                }
                break;
            }
        }
};

console.log(score);