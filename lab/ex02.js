var col = ["red", "blue", "yellow", "green"];
var cols = "";

for (var i = 0; i < col.length; i++) {
    if (col[i] < "purple") {
        cols += col[i];
    }
}

console.log(cols);
