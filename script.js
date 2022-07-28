var randomNumber1 = Math.floor(Math.random() * 6);
var randomNumber2 = Math.floor(Math.random() * 6);

var player1 = prompt("Enter the name of Player 1");
var player2 = prompt("Enter the name of Player 2");

document.querySelector("p").innerHTML = player1;
document.querySelector("p.p2").innerHTML = player2;

var diceRoll = [];
diceRoll.push("images/dice1.png");
diceRoll.push("images/dice2.png");
diceRoll.push("images/dice3.png");
diceRoll.push("images/dice4.png");
diceRoll.push("images/dice5.png");
diceRoll.push("images/dice6.png");


document.querySelector("img.img1").setAttribute("src" , diceRoll[randomNumber1]);
document.querySelector("img.img2").setAttribute("src" , diceRoll[randomNumber2]);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 "+player1 +" Wins!";
}
else if (randomNumber1 == randomNumber2) {
  document.querySelector("h1").innerHTML = "Draw";
}
else {
  document.querySelector("h1").innerHTML = player2 +" Wins! 🚩";
}
