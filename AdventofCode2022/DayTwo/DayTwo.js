const fs = require("fs");

const formula = fs.readFileSync("formula.txt", "utf8")
.replace(/\r/g,"")
.split("\n")
.map(function(item) {
    return item.split(" ");
});


let score = 0;

formula.forEach(e => {
    console.log(e);
        switch (e[1]) {
            case "X":
                switch (e[0]) {
                    case "A":
                        score+= 3;
                        break;
                    case "B":
                        score+= 1;
                        break;
                    case "C":
                        score+= 2;
                        break;
                }
                break;
                
            case "Y":
                score+= 3;
                switch (e[0]) {
                    case "A":
                        score+= 1;
                        break;
                    case "B":
                        score+= 2;
                        break;
                    case "C":
                        score+= 3;
                        break;
                }
                break;
            case "Z":
                score+= 6;
                switch (e[0]) {
                    case "A":
                        score+= 2;
                        break;
                    case "B":
                        score+= 3;
                        break;
                    case "C":
                        score+= 1;
                        break;
                }
                break;
        }
        console.log(score);
    
});

console.log(score);