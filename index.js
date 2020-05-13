// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 * counter 1 count variable is set inside the function while counter 2 is outside the function.
 * 
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * counter 2 uses a closure because the count variable is outside the function and a closure is when something is being referenced outside the function scope. 
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *
 * Maybe counter 1 would be preferable if you want to increment or decrement the value within the function. Counter 2 might be preferable when you want to 
 * reference the count in other functions.
 * 
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function innings(){
  return Math.floor(Math.random()* 3)
}
innings();
/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(data, ings){
  let home = 0;
  let away = 0;
for(let i = 0; i < ings - 1; ++i){
  home += data();
  away += data();
}
return {
  Home: home,
  Away: away
  }

}
console.log(finalScore(innings, 9));
/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `inning` that you wrote above
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: 0 - 2
2nd inning: 1 - 3
3rd inning: 1 - 3
4th inning: 2 - 4
5th inning: 4 - 6
6th inning: 4 - 6
7th inning: 4 - 6
8th inning: 5 - 8
9th inning: 6 - 10

Final Score: 6 - 10 */

let inningresult = ["1st Inning:", "2nd Inning:", "3rd Inning:", "4th Inning:","5th Inning:", "6th Inning:", "7th Inning:", "8th Inning:", "9th Inning:"]
function scoreBoard(cb,ings){
let homeScore = 0;
let awayScore = 0; 
let count = 0;
let board = [];
for(let i = 0; i <= ings-1; i++){
  homeScore += cb(); 
  awayScore += cb();
  board.push(`${inningresult[count]} Home:${homeScore}, Away: ${awayScore} `);
  count++;
}
console.log (board);
console.log(`Final Score: Home Score: ${homeScore}, Away Score: ${awayScore}`);
}
scoreBoard(innings,9);
