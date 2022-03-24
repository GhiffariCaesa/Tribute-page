const prompt = require("prompt-sync")();
const n = parseInt(prompt("Masukkan jumlah baris: "));

let stars = "";
for(let i = n; i >= 1; i--){
    for(let j = n-1; j < i; j--){
        stars += "*";
    }
    stars += "\n"
}
console.log(stars);
