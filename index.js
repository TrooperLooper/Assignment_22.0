
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
  start()

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
  text.addEventListener("input", function()) { //ska det va textInput??
    const inputWord = text.value; //ska det va textInput??

        addWordToDOM(text);
        text.value = "";
        score++;
        scoreEl.innerHTML = score;
        startCountDown()

else {
        text.innerHTML = "";
        return false;
	}
}

}
}

// timer

 function countDown() {
    if (time > 0) {
      time--;
    } else if(time === 0) {
      gameOver();
    }
    timeEl.innerHTML = time;
}

function startCountDown() {
  timerId =setInterval(countDown, 1000)
}

function stopCountDown() {
  clearInterval(timerId);
}

function gameOver (){
    stopCountDown() //stop time
    word.innerHTML = "Game Over! Restarting game..";
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

/*timer täller 
listen

1. You have an array of words: `const words = ['apple', 'banana', 'cherry'];`
2. The user sees the current word on the screen: `word` element displays "banana".
3. The user types "banana" correctly into the `text` input.
4. The `updateScore` function is called, increasing the score from 0 to 1.
5. The `addWordToDOM` function randomly selects and updates the `word` element to display "cherry".
6. The timer is increased by 5 seconds.
7. The `text` input is cleared, ready for the next word.
8. A timer runs in the background and decreases by 1 second every interval until it reaches 0.
9. Once the timer hits 0, the `gameOver` function is triggered, displaying the end-game screen with the total score.
10. The user can hide the settings by clicking the settings button.
11. The user submits a new difficulty level through the settings form, which adjusts the timer based on their selection.


-------

Instructions: 

Typing-game 

REQUIREMENTS: 

PART 1 

Create a addWordToDOM function that will update the ”word” element with a random item from the words array 

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


You need to make a typing game. Here's how to do it:

**Part 1:**

1. **Make a function** that picks a random word from a list and shows it on the screen.
2. **Make another function** that adds 1 to the score when you type a word right.
3. **Watch the typing box**. When someone types the right word:
   - Add 1 to the score.
   - Show a new word on the screen.
   - Give 5 more seconds on the timer.
   - Clear the typing box so it's empty.

**Part 2:**

1. **Make a timer function** that counts down by one second every time it runs. Stop when it gets to zero.
2. **Make a game over function** that shows a "game over" message when the timer hits zero.

**Part 3 (Optional):**

1. **Add a button** that makes the settings disappear when you click it.
2. **Make the settings form** change the game difficulty.
3. **Change the timer** based on how hard the game is by using the settings.


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

  function refresh() {
    window.location.reload(true);
}