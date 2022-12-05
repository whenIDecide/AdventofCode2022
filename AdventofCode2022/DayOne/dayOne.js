const fs = require("fs");

let elfFood = fs.readFileSync("elves.txt", "utf8")
.replace(/\r/g,"")
.split("\n\n")
.map(function(item) {
    return item.split("\n");
});
console.log(elfFood);

let first = 0;
let second = 0;
let third = 0;
for (let i = 0; i < elfFood.length; i++) {
    curr = elfFood[i].reduce((partialSum, a) => partialSum + Number(a), 0);
    if (curr > first) {
        third = second;
        second = first;
        first = curr;
    }
    else if (curr > second) {
        third = second;
        second = curr;
    }
    else if (curr > third){
        third = curr;
    };
};

const total = (first + second + third);
console.log(total);
