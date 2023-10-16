var leftDice = document.getElementsByClassName("img1")[0];
var rightDice = document.getElementsByClassName("img2")[0];

var randomNumberLeft = Math.random();
randomNumberLeft = (randomNumberLeft * 6) + 1;
randomNumberLeft = Math.floor(randomNumberLeft);

var randomNumberRight = Math.random();
randomNumberRight = (randomNumberRight * 6) + 1;
randomNumberRight = Math.floor(randomNumberRight);

function leftDiceSelector() {
    leftDice.setAttribute("src", "./images/dice"+randomNumberLeft+".png");
};
function rightDiceSelector() {
    rightDice.setAttribute("src", "./images/dice"+randomNumberRight+".png");
};

function winner() {
    if(randomNumberLeft > randomNumberRight) {
        document.querySelector("h1").innerText = "Player 1 Wins!";
    } else if (randomNumberRight > randomNumberLeft){
        document.querySelector("h1").innerText = "Player 2 Wins!";
    } else {
        document.querySelector("h1").innerText = "Draw Try Again!";
    }
}

leftDiceSelector();
rightDiceSelector();
winner();