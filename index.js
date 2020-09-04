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
  return callback(stringList[0]);
}

// ⭐️ Example Challenge END ⭐️

///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 *
 * 1. What is the difference between counter1 and counter2?
 * counter 1 saves count as persistent data (known as Persistent Lexically Scoped Reference Data). This data stores the result of count in the functions reference scope and will incrament the counter and save the result perminently. Counter 2 just calls a globally stored const label known as count and incraments it globally. 
 *
 * 2. Which of the two uses a closure? How can you tell?
 * This actually depends on the implementation of these two functions. As it sits right now function 2 utilizes closure as it has to "reach out" of the function to reference the global counter. However if we were to run the counter function inside example one it would also be utilizing closure to achieve the incramentation of the counter. (IE)
 * const myNewFunc =  counterMaker();
    myNewFunc(); 
    myNewFunc();
 *
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better?
 * Counter 1 is preferrable in most cases in Javascript. It is more secure and flexable because it can be used to create multiple counters. However scenario 2 is easier to use and implament if we only need one counter. In order to use the first counter we need to create a new function and set it's value to the result of the function CounterMaker. Otherwise if we try to just run counterMaker, the result will be [function: counter] and if we try to call the counter function from outside the outer function we will get a reference error because that inner function does not exist in the global scope. 
 */

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    return count++;
  };
}

// less secure

// counter2 code
let count = 0;

function counter2() {
  return count++;
}

/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

// var inningScores = [];

// const inning = function() {
//   score = [];
//     for (let i = 0; i < 18; i++){
// const result = Math.floor(Math.random()*3);
// score.push(result);
//     }
// for (let i = 0; i < 18; i++){
// let inningScoreObject = {home: score[i], away: score[++i]};
//  inningScores.push(inningScoreObject);
//  }
// return inningScores;
//   }

//   console.log(inning());

function inning() {
  let score = Math.floor(Math.random() * 3);
  if (score === 3) {
    score = 2;
  }
  return score;
}

console.log(inning());

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/

//

// var inningScores = [];

// function finalScore(inning, inningNumber) {
// for (let i = 0; i < inningNumber * 2; i++){
//   let inningScoreObject = {home: score[i], away: score[++i]};
//   inningScores.push(inningScoreObject);
// }
// return inningScores;
// }

// finalScore(inning, 9)

var homeScore = 0;
var awayScore = 0;

function getInningScore(prior) {
  let i = 1;
  homeScore = prior();
  awayScore = prior();
  return `Away Team: ${awayScore} - Home Team: ${homeScore}`;
}

console.log(getInningScore(inning));

function finalScore(prior, number) {
  let home = 0;
  let away = 0;
  for (let i = 0; i <= number; i++) {
    home = home + prior();
    away += prior();
  }
  return { Home: home, Away: away };
}
console.log(finalScore(inning, 3));

// console.log(finalScore(inning, 4));
/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`

(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */

function scoreBoard(getInningScore, prior, numInnings) {
  let board = [];
  let homeFinalScore = 0;
  let awayFinalScore = 0;
  for (let i = 1; i <= numInnings; i++) {
    board.push(`Inning ${i}: ${getInningScore(prior)}`);
    homeFinalScore += homeScore;
    awayFinalScore += awayScore;
  }
  board.push(
    `Final Score: Away Team: ${awayFinalScore} - Home Team: ${homeFinalScore}`
  );
  return board;
}

console.log(scoreBoard(getInningScore, inning, 9));
