const fs = require("fs");
const { transferableAbortSignal } = require("util");

const trees = fs.readFileSync("trees.txt", "utf8")
.replace(/\r/g, "")
.split("\n")
.map(function(item) {
    return item.split("");
});

const total = (trees[0].length * trees.length);

let bestScore = 0;
for (let i = 1; i < trees.length - 1; i++) {
    for (let u = 1; u < (trees[i].length - 1); u ++) {

        let scoreNorth = 0
        for (let n = i - 1; n >= 0; n--) {
            scoreNorth++;
            if (trees[n][u] >= trees[i][u]) {
                break;
            }
        }


        let scoreEast = 0;
        for (let e = u + 1; e < trees[i].length; e++) {
            scoreEast++;
            if (trees[i][e] >= trees[i][u]) {
                break;
            }
        }

        let scoreSouth = 0;
        for (let s = i + 1; s < trees.length; s++) {
            scoreSouth++
            if (trees[s][u] >= trees[i][u]) {
                break;
            }
        }

        let scoreWest = 0;
        for (let w = u - 1; w >= 0; w--) {
            scoreWest++;
            if ((trees[i][w]) >= (trees[i][u])) {
                break;
            }
        }
        let tempScore = (scoreWest * scoreNorth * scoreEast * scoreSouth);
        if (tempScore > bestScore) {
            bestScore = tempScore; 
        }

    }
}
console.log(bestScore);




