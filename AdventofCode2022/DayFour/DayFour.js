
const fs = require("fs");

const cleaning = fs.readFileSync("cleaning.txt", "utf8")
.replace(/\r/g,"")
.split("\n")
.map(function(item) {
    return item.split(",")
});

for (let i = 0; i < cleaning.length; i++) {
    cleaning[i][0] = cleaning[i][0].split("-");
    cleaning[i][1] = cleaning[i][1].split("-");
    cleaning[i].map(function(item) {
        return item[0] = parseInt(item[0], 10), item[1] = parseInt(item[1], 10);
    });
};
let count = 0;

cleaning.forEach(el => {
    if ((el[0][0] >= el[1][0]) && (el[0][0] <= el[1][1]) || (el[1][0] >= el[0][0]) && (el[1][0] <= el[0][1])) {
        
        count++;
    };
});

console.log(count);