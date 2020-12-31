//Get input from users among rock, paper, scissors and store it in a variable
//Make a function to randomly generate rock, paper, scissors and store it in a variable
//Make a function that takes player input and computer input and returns the result of the game
//Make a function that lets you play 5 times, store the results and return the result at the end of 5 games.

//Getting input from user and storing it
function getUserInput() {
  tempValue = prompt('Please enter Rock, Paper or Scissors.');
  if (
    tempValue.toLowerCase() === 'rock' ||
    tempValue.toLowerCase() === 'paper' ||
    tempValue.toLowerCase() === 'scissors'
  ) {
    return tempValue.toLowerCase();
  } else {
    alert('The entered value is incorrect');
  }
}

//function to generate computer input, 0 is assigned to rock, 1 to paper and 2 to scissors.
function genCompInput() {
  let x = Math.floor(Math.random() * 3);
  switch (x) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
    default:
      break;
  }
}

//function that takes player input and computer input and returns the result.
//Use if statement to establish the tie condition at the start.
//use a combination of switch and if statement to address all result possibilities.
function gameLogic(userInput, compInput) {
  if (userInput === compInput) {
    return 'The game tied.';
  }
  switch (userInput) {
    case 'rock':
      if (compInput === 'paper') {
        return 'You lost the game.';
      } else if (compInput === 'scissors') {
        return 'You won the game.';
      }
      break;
    case 'paper':
      if (compInput === 'scissors') {
        return 'You lost the game.';
      } else if (compInput === 'rock') {
        return 'You won the game.';
      }
      break;
    case 'scissors':
      if (compInput === 'rock') {
        return 'You lost the game.';
      } else if (compInput === 'paper') {
        return 'You won the game.';
      }
      break;
  }
}

// console.log(userInput);
// console.log(compInput);
// console.log(gameLogic(userInput, compInput));

//Write a function game to play the game 5 times and display the winner and looser at the end.

function game() {
  let score = 0;

  for (let i = 0; i < 5; i++) {
    console.log(`Current round: ${i + 1}`);
    let userInput = getUserInput();
    let compInput = genCompInput();
    let result = gameLogic(userInput, compInput);
    console.log(result);
    if (result === 'You won the game.') {
      score += 1;
      console.log(`${userInput} beats ${compInput}`);
    } else if (result === 'You lost the game.') {
      score -= 1;
      console.log(`${compInput} beats ${userInput}`);
    } else {
      console.log(`You and computer both selected ${userInput}.`);
    }
  }
  if (score > 0) {
    console.log('You are the winner.');
  } else if (score < 0) {
    console.log('Computer is the winner');
  } else {
    console.log('Its a tie.');
  }
}

game();
