const fs = require("fs");

const packages = fs.readFileSync("packages.txt", "utf8")
.replace(/\r/g,"")
.split("\n");


let score = 0;
packages.map(function(item) {

    let sub = item.substring(0, item.length / 2 ).split("");
	let remainder = item.substring(item.length /2).split("");
    for (let i = 0; i < sub.length; i++) {
        let c = 0;
        for (let e = 0; e < sub.length; e++) {
            if (sub[i] == remainder[e]) {
                console.log(sub[i]);
                if (sub[i] == sub[i].toUpperCase(0)) {
                    score += (sub[i].charCodeAt(0) - 38);
                }
                else {
                    score += (sub[i].charCodeAt(0) - 96);
                }
                c++;
                break;
            }
        }
        if (c > 0) {
            break;
        }
    }
});

console.log(score);