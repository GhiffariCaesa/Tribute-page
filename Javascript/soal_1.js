const prompt = require("prompt-sync")();
const counter = parseInt(prompt("Masukan jumlah bilangan yang ingin dicek: "));

for(var i = 1; i <= counter; i++){
    if(i % 3 === 0){
        console.log("merupakan kelipatan 3");
    }

    if(i % 5 === 0){
        console.log("merupakan kelipatan 5")
    }

    if(i % 3 === 0 && i % 5 === 0){
        console.log("merupakan kelipatan 3 dan kelipatan 5")
    }
    console.log(i);
}