/*
Uncomment variable dibawah ini untuk mulai mengerjakan. dilarang mengganti nama variable yang dibuat.
*/

let newGameBtn = document.getElementsByClassName("btn-warning")[0]
let randomNumber = Math.floor(Math.random() * 11);
let message = document.getElementsByClassName("message");
let displayScore = document.getElementsByClassName("score-label");
let input = document.getElementsByClassName("input");
let checkBtn = document.getElementsByClassName("btn-primary");
// let score = nilai yang akan ditampilakan

// TODO: answer here


function displayMessage(msg) {
  // TODO: answer here
}

function resetGame() {
  // TODO: answer here
  //dilarang menghapus code dibawah ini!
  document.getElementById('hidden-number').innerHTML = randomNumber
}

function checkNumber() {
  // TODO: answer here
}

//dilarang menghapus code dibawah ini!
document.getElementById('hidden-number').innerHTML = randomNumber