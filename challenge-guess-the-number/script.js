let randomNumber = Math.floor(Math.random() * 100 + 1);
let guessCount = 7;
let isWon = false;
const numberInput = document.querySelector('.inputs-Values');
const finalOutput = document.querySelector('.final-output');
const triesOutput = document.querySelector('.tries-output');
document.querySelector('.btnNewGame').addEventListener('click', newGame);

function guessNumber() {
  // Collect input from the user
  const guess = parseInt(numberInput.value, 10);

  if (typeof guess !== 'number' || guess <= 0 || guess > 100) {
    finalOutput.innerText = 'Please enter a number between 1 and 100';
    return;
  }
  if (guess !== randomNumber && guessCount <= 1) {
    triesOutput.innerText = '';
    finalOutput.innerText = `You Lose, the number was ${randomNumber}`;
    
    return;
  }
  if (guess > randomNumber) {
    guessCount--;
    triesOutput.innerText = `Number of Tries: ${guessCount}`;
    finalOutput.innerText = 'Number is too high, try again';
    return;
  }
  if (guess < randomNumber) {
    guessCount--;
    triesOutput.innerText = `Number of Tries: ${guessCount}`;
    finalOutput.innerText = 'Number is too low, try again';
    return;
  }
  if (guess === randomNumber) {
    guessCount -= !isWon ? 1 : 0;
    triesOutput.innerText = `It took you ${7 - guessCount} tries`;
    finalOutput.innerText = `${guess} is correct. You win!`;
    isWon = true;
  }
}

function newGame() {
  randomNumber = Math.floor(Math.random() * 100 + 1);
  numberInput.value = '';
  finalOutput.innerText = 'Guess a number between 1 and 100';
  guessCount = 7;
  triesOutput.innerText = `Number of Tries: ${guessCount}`;
  isWon = false;
}

// keyboard exception
function keyBoardEvents(e) {
  if (e.keyCode === 13) {
    guessNumber();
  }
}

document.querySelector('.btnGuess').addEventListener('click', guessNumber);
document.addEventListener('keypress', keyBoardEvents);