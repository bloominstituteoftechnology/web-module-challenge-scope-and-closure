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
 *
 *  counter 1 has a locally declared 'count' variable, counter 2 has a globally declared 'count' variable.
 *
 *
 * 2. Which of the two uses a closure? How can you tell?
 *
 * counter1, because it uses a function within another function and declares
 *
 *
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better?
 * counter1
 */

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    return count++;
  };
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}

/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(teamScored) {
  var teamScored = Math.round(Math.random() * 2);
  return teamScored;
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

function finalScore(inning, numberOfInnings) {
  var awayScore = 0;
  var homeScore = 0;
  for (let i = 0; i < numberOfInnings; i++) {
    awayScore += inning();
    homeScore += inning();
  }
  return `"Home": ${homeScore},\n"Away": ${awayScore},`;
}

console.log(finalScore(inning, 9));

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

//function getInningScore(awayScore, homeScore) {
//  return awayScore + " - " + homeScore;
//}

//function scoreboard(getInningScore, inning, numberOfInnings) {
//  var awayScore;
//  var homeScore;
//  var currentInning = 0;

// for (let i = 0; i < numberOfInnings; i++) {
//    awayScore = inning();
//    homeScore = inning();
//    if (currentInning === 1) {
//      currentInning + "st inning: " + awayScore + " - " + homeScore;
//    } else if (currentInning === 2) {
//    }
//    return `${currentInning} ${homeScore},\n"Away": ${awayScore},`;
//  }
//}

//console.log(scoreboard(getInningScore, inning, 9));
//how many innings?
//what's the score for inning 1?
//display score for 1st inning with proper labeeling
//repeat for all innnings
//display final score

//calculate awayTeam and homeTeam scores for inning 1
//increment final score variable
//display inning#, awayTeam and homeTeam scores
//repeat for N innings

//scoreboard

//  Number of innings

//        inning score

function scoreboard(inning, innings) {
  let homeScore = 0;
  let awayScore = 0;

  for (let i=1 ; i <= innings ; i++) {
    homeScore += inning();
    awayScore += inning();
    console.log(`Inning ${i} | Home: ${homeScore} | Away: ${awayScore}`);
    console.log(`Final Score | Home: ${homeScore} | Away: ${awayScore}`);
  }
}

scoreboard(inning, 9);