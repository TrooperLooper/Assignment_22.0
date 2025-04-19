
let score = 0; //initial score 0
let time = 10;
let timerInterval = time;


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


//listen to window DOM starts game

//window.addEventListener('load', startGame); 

startGame();

function startGame() {

  checkInput();
  addWordToDOM(); //addWordToDOM(text);
  startCountDown();
  text.addEventListener("input", checkInput);

}

// 1. picks random word

function addWordToDOM() {

  const randomPick = Math.floor(Math.random() * words.length);
  word.innerText = words[randomPick];
}

// checks word - clears text
function checkInput() {

  if (text.value === word.innerText) {
  
          text.value = "";
          updateScore();
          addWordToDOM();
          stopCountDown();
          startCountDown();      
        }
  }
  
  //updates score 

  function updateScore() {
    score++;
    scoreEl.innerHTML = score;
  }


// time

 function countDown() {
    if (time > 0) {
      time--;
    } else if(time === 0) {
      gameOver()
    }
    timeEl.innerHTML = time;
}

function startCountDown() {
  timerInterval=setInterval(countDown, 1000); //timeEl
}

function stopCountDown() {
  clearInterval(timerInterval); //clear countDown? timeEl
}

function gameOver (){
    stopCountDown(); //stop time;
    alert("Game over! Your score is " + score);
}




/*
// settings - difficulty level

const select = document.getElementById('difficulty');

function startCountDown() {
  timerId =setInterval(...);
}

const values = {
  easy: 'easy',
  medium: 'medium',
  hard: 'hard',
};

select.value = values.easy;

function startGame() {
  let timer;
  if (select.value === values.easy) {
    timer = setInterval(countDown, 10000);
    startGame();
  } else if (select.value === values.medium){
    timer = setInterval(countDown, 5000);
    startGame();
  } else if (select.value === values.hard) {
    timer = setInterval(countDown, 3000);
    startGame;()
  }
}






/* 1. **Make a function** that picks a random word from a list and shows it on the screen. OK
2. **Make another function** that adds 1 to the score when you type a word right. OK
3. **Watch the typing box**. When someone types the right word:
   - Add 1 to the score.
   - Show a new word on the screen.
   - Give 5 more seconds on the timer.
   - Clear the typing box so it's empty.


/*

// Variables for the DOM elements
const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game-container");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const settingsBtn = document.getElementById("settings-btn");

const difficultySelect = document.getElementById("difficulty");
choose value if?

	setInterval(countdown, 1000);
word.innerText = ${showWord};
document.title(words[randomWord]);







//Initializing word
let randomWord;


//Initializing time
let time = 10;
const scoreEl = document.getElementById("score");


setTimeout (second, 1000);
function second{
  minus et sekund og print inde i box time
}

placeholder.addEventListener(input.txt)
if placeholder.txt match med randomword
then congratulations


-------

Instructions: 

Typing-game 

REQUIREMENTS: 

PART 1 

Create a addWordToDOM function that will update the ”word” element with a random item from the words array OK

Create a updateScore function that will increment score by +1 

Add an event listener to the ”text” element. When you type in the correct word, the function should:  

Call updateScore  

give the user a new word by calling addWordToDOM 

increment time by 5 seconds  

reset the input to empty string 

 

PART 2 

Create a updateTime function using the setInterval( ) method, every time it runs it should decrement -1 from the timer. Stop the timer when it reaches zero. 

Create  a gameOver function that will display the end-game-container once the timer hits zero 

 

PART 3, OPTIONAL: 

Add an event listener to the settings button that will hide the settings 

Add an event listener for the settings form so that you can change the difficulty 

Set time depending on difficulty in the eventlistener 



välja i manyn ger färre sekunder idbyclass

   <label for="difficulty" class="difficulty">Difficulty:</label>
          <select id="difficulty">
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>

          const e = document.getElementById("settings");
function onChange() {
const value = e.value;
const text = e.options[e.selectedIndex].text;
time.add (5)
}
e.onchange = onChange;
onChange();

addword
	if (score === -1) 
	 	    score.innerHTML = 0 ; // resets the score/ the game if game has negative value?
	else 
		    score.innerHTML = score;  //updatescore?
  )

    setInterval(chkStatus, 50);


  function refresh() {
    window.location.reload(true);
}

    const inputWord = text.value; //ska det va textInput??

    start
    else {
        text.value = ""; // text.innerHTML = "";??
        //return false;
        score--;
        updateScore();
        addWordToDOM();
        startCountDown();
