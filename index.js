//  ⭐️ Example Challenge START ⭐️

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

//  ⭐️ Example Challenge END ⭐️

/ M V P /;

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 *
 * 1. What is the difference between counter1 and counter2?
 *
 *--- There is a child function in counter 1.
 *
 * 2. Which of the two uses a closure? How can you tell?
 *
 * ---counter 1uses closure because its inner function to access variables from a higher level scope
 *
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better?
 *
 * ---counter1 would be preferable if in th situation which we want to reuse the code already identified.
 * ---counter2 woule be better if we want that function being passed into the parent function
 *
 */

//  counter1 code
function counterMaker() {
  const count = 0;
  return function counter() {
    return count++;
  };
}

const counter1 = counterMaker();

//  counter2 code
const count = 0;

function counter2() {
  return count++;
}

/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */
function inning() {
  return Math.floor(Math.random() * (2 - 0 + 1)) + 0;
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

function finalScore(inning, inningsNum) {
  let homeTeam = 0;
  for (let i = 0; i < inningsNum; i++) {
    Home = inning + inningsNum;
  }

  let awayTeam = 0;
  for (let i = 0; i < inniningsNum; i++) {
    Away = innings + inningsNum;
  }
  return {
    Home: homeTeam,
    Away: awayTeam,
  };
  /*Code Here*/
}

//  function inning(min, max) {
//  return Math.random() * (max - min) + min;

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `inning` that you wrote above
(2) A number of innings

and returns the score at each point in the game, like so:

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

// 1. keep count of innings - figure out how to show the score of each step
// 2. keep score of each team - figure out how to store the points of each team
// 3. generate random number of points for each inning for each team
  // add the generated number to each team
  // show the current score
// 4. when do you stop the function?
  // when you reach the number of innings

// Two things you are passing in:
// callback - generate random points between 0-2
// numOfInnings will tell you how many innings there are going to be

function scoreboard(innCallBack, numOfInnings) {
  let currentInningCount = 0
  let homeScore = 0
  let awayScore = 0

  while (currentInningCount < numOfInnings) {
    currentInningCount += 1
    homeScore = homeScore + innCallBack()
    awayScore = awayScore + innCallBack()
    console.log(`${currentInningCount} inning: ${homeScore} - ${awayScore}`) 
  }
  return `Final Score: ${homeScore} - ${awayScore}`;
}
