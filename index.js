
let isPlaying;
let score = 0; //initial score 0
let time = 10;
let timerId;


// Variables for the DOM elements
const word = document.getElementById("word");
const text = document.getElementById("text"); //word input
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game-container");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const settingsBtn = document.getElementById("settings-btn");



// Array
const words = [
  "dependent",
  "dog",
  "superficial",
  "admit",
  "juice",
  "javascript",
  "developer",
  "airplane",
  "great",
  "fun",
  "manipulate",
  "cat",
  "transition",
  "school",
  "computer",
  "programming",
  "drag",
  "loving",
  "north",
];

//0. initialize gamefunctions

//listen to window DOM starts game
window.addEventListener('load', initializeGame); 

function initializeGame() {

  setInterval(chkStatus, 50);
  setInterval(countDown, 1000);

  addWordToDOM(text); //addWordToDOM(text);
  text.addEventListener('input', start);

}

initializeGame()

// 1. picks random word

const word  = document.getElementById("word"); //IDWord

// addwordtodom

function addWordToDOM() {
  const randomPick = Math.floor(Math.random() * words.length);
  word.innerText = words[randomPick];
  timerId(); //??? here
}


// 2. Listens to result and matches up with chosen word. if true add 1 to score
//loop this?


function start() {

if (text.value === word.innerHTML) {
  textInput.addEventListener("input", function() {
    const inputWord = textInput.value;

        isPlaying = true;
        addWordToDOM(text);
        text.value = "";
        score++;
        scoreEl.innerHTML = score;
        setInterval(countDown, 500); //matches word and adds 1 to score, adds 5 seconds, addWordToDOM

	} else {
        text.innerHTML = "";
        return false;
	}
	if (score === -1) 
	 	    score.innerHTML = 0 ; // resets the score/ the game?
	else 
		    score.innerHTML = score;  //updatescore?
  )

}

}

// timer

 function countDown() {
    if (time > 0) {
      time--;
    } else if(time === 0) {
      //game Over
      isPlaying = false;
      gameOver(); //is this needed?
    }
    timeEl.innerHTML = time; //eller timeEl???
}

function startCountDown() {
  timerId =setInterval(countDown, 1000)
}

function stopCountDown() {
  
}

let countdownTimer;
countdownTimer = setInterval(countDown, 1000);

// checks if time runs out and add -1 poäng till score
 function chkStatus() {
    if (!isPlaying && time === 0) {
      score = -1;
      gameOver();
	} 
}

function gameOver (){
    word.innerHTML = "Game Over";
    //set clearInterval here
    setTimeout (refresh, delay, 500);
}

function refresh() {
    window.location.reload(true);
}

 // chosen level?
 let time = currentLevel;

