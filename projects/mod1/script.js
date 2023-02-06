// var choices = [{
//   "choice": "rock",
//   "beats": "scissors",
//   "loses": "paper"
//   },{
//   "choice": "paper",
//   "beats": "rock",
//   "loses": "scissors"
//   },{
//   "choice": "scissors",
//   "beats": "paper",
//   "loses": "rock"
//   }];

// button to show/hide rules
function showHideRules() {
  var rules1 = document.getElementById("rulesContent");
  if (rules1.style.display === "none") {
    rules1.style.display = "block";
  } else {
    rules1.style.display = "none";
  }  
}  


// Must have two Classes and one instance of each class
class user {
  constructor(userChoice, name) {
    this.name = ""; 
    this.userChoice = userChoice;
    this.cpuChoice = this.randomCpuChoice(); 
    }
  
  getUserChoice = () => this.userChoice;
  getCpuChoice = () => this.cpuChoice; 

  randomCpuChoice() {
    const options = ["scissors", "rock", "paper"];

    return options[Math.floor(Math.random() * options.length)];
  
}
}
const userChoice = document.querySelector('.buttons');
userChoice.addEventListener('click', function(e){
  if (e.target.)
})


// class cpu extends user {
//  constructor(offense, defense, randomAttack){
//     this.offense = offense;
//     this.defense = defense;
//     this.randomAttack = ['scissors','rock','paper'];
//     }
    

//   gBB() {
    
//   }
//   mJP()

// } 
// make class2 a child extending of class1
// Story must be controlled by buttons



// Must have a reset button


//win state
// win1 & win2 = rock > scissors, scissors > paper, paper > rock
// win3 = win of win2 attack == lose of win2 defense 


// A lose state - a way for the player to lose the game

// lose1 & lose2 != win1 & win2 
// lose3 != win3 

// reset 

// A way to keep playing if the game is not over 
// loop

// Multiple rounds to play - a round must begin, end, and there must be a way to check if the game should continue or the overall game is won or lost 

//gawi bawi bo 
//kai bai bo 
//mukjjippa 
// if attack = defense then console.log you lose
// menu bar with reset button, rules button, mute button, start over
//enter name or hit enter to start: 
// console.log("hello" + username + "!") : console.log("hello!")
// display first set of text, hit enter to continue

// upon click show choice by changing border color around images add audio
// display result in the middle

// const cpuDisplay = document.getElementsByClassName('cpu')
// const userChoiceDisplay = document.getElementsByClassName('player')
// const resultDisplay = document.getElementsByClassName('result')
// const possibleResults = document.querySelectorAll('button')
// let userChoice

// possibleResults.forEach(possibleResult => possibleResult.addEventListener('click', (evt) => {
//   userChoice = evt.target.class
//   userChoiceDisplay.innerHTML = userChoice
// }))

// function generateCpuChoice() {
//  const randomChoice = Math.floor(Math.random() * possibleResults.length); 
//   console.log(randomChoice)
// }

// console.log("hello! today we will be playing korean rock paper scissors~", 
// "pronounced gawi bawi bo or kai bai bo, the order goes: gawi - scissors, bawi - rock, bo - paper",
// "the same rules apply: scissors beats paper, rock beats scissors, paper beats rock")


// console.log("gawi bawi bo, hanappaegi-il: this means scissors, rock, paper, subtract one", 
// "this version requires you to make two choices!",
// "you will choose two moves then choose one move to 'subtract' or not play as the attack",
// "the same rules apply in determining the winner!",
// "let's begin!")
  



// console.log("this version is mook-jji-ppa: meaning mook - rock, jji - scissors, ppa - paper", 
// "begin by playing gawi bawi bo, the winner becomes the offense and the loser becomes the defense",
// "the offense will call out their move and play their attack",
// "simultaneously the defense will play their move without callng out the move",
// "the new offense is determined by gawi bawi bo rules: rock beats scissors, scissors beats paper, paper beats rock",
// "the game ends if the offense and the defense play the same move")
     


// images for scissors, paper, rock
// change images for mookjjippa
// add music 
// gif background image pixelated
// if win change color to green if draw change to blue if loss change to red 
// reset button
// rules button
// 

// const gawiBtn = document.querySelectorAll('.buttons #gawi');
// const bawiBtn = document.querySelectorAll('.buttons #bawi');
// const boBtn = document.querySelectorAll('.buttons #bo');
// gawiBtn.style.backgroundImage = url(""images/scissors.png");

// let button; 

const playerDisplay = document.querySelector('.player');
const cpuDisplay = document.querySelector('.cpu');
const resultDisplay = document.querySelector('.result'); 

let player;
let cpu;
let result; 


// reset 

// const playerText = document.querySelector('#playerText')
// const computerText = document.querySelector('#computerText')
// const resultText = document.querySelector('#resultText')
// const choiceBtns = document.querySelectorAll('.choiceBtn')

// let player;
// let computer;
// let result;

// choiceBtns.forEach(button => button.addEventListener('click', () => {
//   player = button.textContent;  
//   computerTurn();
//   playerText.textContent = `Player: ${player}`;
//   computerText.textContent = `Computer: ${computer}`;
//   resultText.textContent = `Result: ${winner()}`; 
// }))

// function computerTurn() {
  //   const randomNumber = Math.floor(Math.random() * 3) + 1; 
  
//   switch(randomNumber){
//     case 1:  
//       computer = "rock";
//       break;
//     case 2: 
//       computer = "paper";
//       break;
//     case 3:
//       computer = "scissors";
//       break;
//   }
// }

// function winner () {
//   if(player == computer){
//     return "Draw";  
//   } else if (computer == "rock"){
//     return (player == 'paper') ? "you win" : "you lose"  

//   } else if (computer == "paper"){
//     return (player == 'scissors') ? "you win" : "you lose"  
    
//   } else if (computer == "scissors"){
//     return (player == 'rock') ? "you win" : "you lose"  
    
//   }
// }






