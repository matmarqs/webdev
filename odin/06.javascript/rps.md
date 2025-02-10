# Project: Rock Paper Scissors

You don’t have to write additional code in the HTML file. This game is played entirely via the console.

### Write the logic to get the computer choice :white_check_mark:

Your game will be played against the computer. You will write a function that randomly returns “rock”, “paper” or “scissors”.


1. Create a new function named `getComputerChoice`.
2. Write the code so that `getComputerChoice` will randomly `return` one of the following string values: “rock”, “paper” or “scissors”.
  - **Hint**: The <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random" target="_blank" rel="noopener noreferrer">Math.random</a> method returns a random number that’s greater than or equal to 0 and less than 1. Think about how you can use this to conditionally return one of the multiple choices.
  - **Note**: Some learners might think that arrays are necessary for this problem, but they aren’t. If you’re unfamiliar with arrays, don’t worry - they’ll be covered later in the curriculum.


3. Test that your function returns what you expect using `console.log` or <a href="https://www.theodinproject.com/lessons/foundations-javascript-developer-tools" target="_blank" rel="noopener noreferrer">the browser developer tools</a> before advancing to the next step.


### Write the logic to get the human choice :white_check_mark:

Your game will be played by a human player. You will write a function that takes the user choice and returns it.


1. Create a new function named `getHumanChoice`.
2. Write the code so that `getHumanChoice` will return one of the valid choices depending on what the user inputs.
  - **Hint**: Use the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt" target="_blank" rel="noopener noreferrer">prompt</a> method to get the user’s input.


3. Test what your function returns by using `console.log`.


### Declare the players score variables :white_check_mark:

Your game will keep track of the players score. You will write variables to keep track of the players score.
1. Create two new variables named `humanScore` and `computerScore` in the global scope.
2. Initialize those variables with the value of `0`.


### Write the logic to play a single round :white_check_mark:

Your game will be played round by round. You will write a function that takes the human and computer player choices as arguments, plays a single round, increments the round winner’s score and logs a winner announcement.


1. Create a new function named `playRound`.
2. Define two parameters for `playRound`: `humanChoice` and `computerChoice`. Use these two parameters to take the human and computer choices as arguments.
3. Make your function’s `humanChoice` parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations.
4. Write the code for your `playRound` function to `console.log` a string value representing the round winner, such as: “You lose! Paper beats Rock”.
5. Increment the `humanScore` or `computerScore` variable based on the round winner.


Example code:

```js
function playRound(humanChoice, computerChoice) {
  // your code here!
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
```

### Write the logic to play the entire game :white_check_mark:

Your game will play 5 rounds. You will write a function named `playGame` that calls `playRound` to play 5 rounds, keeps track of the scores and declares a winner at the end.


1. Create a new function named `playGame`.
2. Move your `playRound` function and score variables so that they’re declared inside of the new `playGame` function
3. Play 5 rounds by calling `playRound` 5 times.
  - **Hint**: When you assign a function call to a variable, the return value of that function is assigned to the variable. Accessing the variable afterward will only provide the assigned value; it doesn’t recall the function. You need to recall the choice functions to get new choices for each round.
  - Re-work your previous functions or create more helper functions if necessary. Specifically, you may want to change the return values to something more useful.
  - If you already know about loops, you can use them. If not, don’t worry! Loops will be covered in the next lesson.
