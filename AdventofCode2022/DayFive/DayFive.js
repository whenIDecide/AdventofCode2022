const fs = require("fs");

const moves = fs.readFileSync("boxes.txt", "utf8")
.replace(/move (\d+) from (\d+) to (\d+)(\r)?/g,"$1 $2 $3")
.split("\n")
.map(function(item) {
    return item.split(" ")
});


let stacks = [
    ["R","H","M","P","Z"],
    ["B","J","C","P"],
    ["D","C","L","G","H","N","S"],
    ["L","R","S","Q","D","M","T","F"],
    ["M","Z","T","B","Q","P","S","F"],
    ["G","B","Z","S","F","T"],
    ["V","R","N"],
    ["M","C","V","D","T","L","G","P"],
    ["L","M","F","J","N","Q","W"]
];


function mover(number, from, to) {
for (let i = number; i > 0; i--) {
    temp = from.shift()
    to.unshift(temp)
}
};

let stacksAfterMoves = moves.forEach(el => {
     mover(parseInt(el[0], 10)
     ,stacks[parseInt(el[1], 10) -1]
     ,stacks[parseInt(el[2], 10) -1])
});

console.log(stacks);
