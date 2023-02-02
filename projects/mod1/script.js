const playerText = document.querySelector('#playerText')
const computerText = document.querySelector('#computerText')
const resultText = document.querySelector('#resultText')
const choiceBtns = document.querySelectorAll('.choiceBtn')

let player;
let computer;
let result;

choiceBtns.forEach(button => button.addEventListener('click', () => {
  player = button.textContent;
  computerTurn();
  playerText.textContent = `Player: ${player}`;
  computerText.textContent = `Computer: ${computer}`;
  resultText.textContent = `Result: ${winner()}`; 
}))

function computerTurn() {
  const randomNumber = Math.floor(Math.random() * 3) + 1; 

  switch(randomNumber){
    case 1:
      computer = "rock";
      break;
    case 2: 
      computer = "paper";
      break;
    case 3:
      computer = "scissors";
      break;
  }
}

function winner () {
  if(player == computer){
    return "Draw";
  } else if (computer == "rock"){
    return (player == 'paper') ? "you win" : "you lose"
    
  } else if (computer == "paper"){
    return (player == 'scissors') ? "you win" : "you lose"
    
  } else if (computer == "scissors"){
    return (player == 'rock') ? "you win" : "you lose"
    
  }
}
