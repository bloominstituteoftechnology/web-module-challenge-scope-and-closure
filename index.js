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
 *  The variable is inside the functional scope in counter1. The variable is part of the global scope in counter2
 * 2. Which of the two uses a closure? How can you tell?
 *  counter 2. It is declared as a function expression and creates a functional scope.
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better?
 *    *	Counter 2 would be used strictly as a function and would only work in that particular situation.
 *      Counter 2 is also ideal for hoisting.
 *      To be able to assign various variables to a function then counter 1 would be ideal
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

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){

  let points = Math.round(Math.random()*2);
  return points;
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

function finalScore(callback,inn){
  let gameScore = {Home: 0, Away: 0};

  for(let i = 1; i<=inn; i++) {
    let homeScore = callback();
    let awayScore = callback();

    gameScore.Home+=homeScore;
    gameScore.Away+=awayScore;
  }
  return gameScore;
}

console.log(finalScore(inning,9));

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


function scoreboard(callback, inn) {
  // Here I declare the object with 0 values which is the starting score. This is the the higher order function.
  let gameScore = {Home: 0, Away: 0};

  // loop (that starts from i=1 representing the 1st inning with "i" representing an inning) to iterate the "inn" argument's "parameter value"
  for(let i = 1; i<=inn; i++) {
    let homeScore = callback();
    let awayScore = callback();

    gameScore.Home+=homeScore;
    gameScore.Away+=awayScore;

    // function within the loop to declare "getInningScore" function within the higher function
    function getInningScore(){
      if(i===1){
        return `${i}st inning: ${gameScore.Away} - ${gameScore.Home}`;
      }
      else if(i===2){
        return `${i}nd inning: ${gameScore.Away} - ${gameScore.Home}`;
      }
      else if(i===3){
        return `${i}rd inning: ${gameScore.Away} - ${gameScore.Home}`;
      }
      else {
        return `${i}th inning: ${gameScore.Away} - ${gameScore.Home}`;
      }
    }

    console.log(getInningScore());
  }



  return `Final Score: ${gameScore.Away} - ${gameScore.Home}`;

/* CODE HERE */
 }

console.log(scoreboard(inning, 9));

