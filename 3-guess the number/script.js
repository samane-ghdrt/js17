let randomNumber = Math.floor(Math.random() * 100 + 1);

function guessNumber() {
  //Collect input from the user
  let guess = document.querySelector('.inputs-Values').value;
  printFinal.textContent=`Number of Tries: 7`
i=7; 
   //If the user inputs a bad input ie 0, empty string, number greater that 100, number less than zero Print "Please enter a number between 1 and 100"
if(!(0<guess<=100)){
  alert('Please enter a number between 1 and 100');
}
  //If the users guess is higher than the random number print Number is too high, try again (hint use .final-out class to print)
  const printFinal=document.querySelector('.final-output');
if (guess>randomNumber) {
  i--;
  printFinal.textContent="Number is too high";
  printFinal.textContent=`Number of Tries: ${i}`;
}
  //If the users guess is lower than the random number print Number is too low, try again  (hint use .final-out class to print)
if (guess<randomNumber) {
  i--;
  printFinal.textContent="Number is too low";
  printFinal.textContent=`Number of Tries: ${i}`;
}
  //If the user has guessed the random number correctly print out the randomNumber with a message "Guess is correct. You win!"
if (guess===randomNumber) {
  printFinal.textContent="Guess is correct. You win!";
}
}

// For this task we will be making a "New Game" button function which will reset our game,
// Once the user clicks on this button the user will have new random number to guess
// 1. Reset the values inside the body of the function
// 2. Attach our new game button using an event listener to the .btnNewGame button
function newGame() {
  //Your code here
  //Reset randomNumber
  randomNumber = Math.floor(Math.random() * 100 + 1);
  //Reset users input field
  document.querySelector('.inputs-Values').value="";
  //Reset tries, and triesTaken by the user
  printFinal.textContent="Number of Tries: 7 ; Get a number between 1 and 100";
}

document.querySelector('.btnGuess').addEventListener('click', guessNumber);
document.querySelector('.btnNewGame').addEventListener('click', newGame);