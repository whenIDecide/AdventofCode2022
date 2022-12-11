const fs = require("fs");
const { transferableAbortSignal } = require("util");

const trees = fs.readFileSync("trees.txt", "utf8")
.replace(/\r/g, "")
.split("\n")
.map(function(item) {
    return item.split("");
});

const total = (trees[0].length * trees.length);

let count = 0;
for (let i = 1; i < trees.length - 1; i++) {
    for (let u = 1; u < (trees[i].length - 1); u ++) {

        let isVisibleWest = true;
        for (let w = 0; w < u; w++) {
            if ((trees[i][w]) >= (trees[i][u])) {
                isVisibleWest = false;
                break;
            }
        }

        if (isVisibleWest) {
            continue;
        }

        let isVisibleNorth = true;
        for (let n = 0; n < i; n++) {
            if (trees[n][u] >= trees[i][u]) {
                isVisibleNorth = false;
                break;
            }
        }

        if (isVisibleNorth) {
            continue;
        }

        let isVisibleEast = true;
        for (let e = (trees[i].length - 1); e > u; e--) {
            if (trees[i][e] >= trees[i][u]) {
                isVisibleEast = false;
                break;
            }
        }

        if (isVisibleEast) {
            continue;
        }

        let isVisibleSouth = true;
        for (let s = (trees.length - 1); s > i; s--) {
            if (trees[s][u] >= trees[i][u]) {
                isVisibleSouth = false;
                break;
            }
        }
        if (isVisibleSouth) {
            continue;
        }
        count++;
        

    }
}

console.log(total - count);


