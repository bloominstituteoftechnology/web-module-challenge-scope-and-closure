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
 *    The difference between counter 1 and 2 is counter 2 uses a closure
 * 2. Which of the two uses a closure? How can you tell?
 *    Counter 2 uses a closure and you can tell because it is functionception
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *    Counter one is useful for when you want to make mul;tiple counters or when you want the counter to remember the info in the function.
 *    The second one you use it and the count stays as it until reset
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
  return Math.floor(Math.random() * 3)

}

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(callback, number){
    let home = 0;
    let away = 0;
    for (let i = 1; i <= number; i++){
        home += callback();
        away += callback();
    }
    return {
      Home: home,
      Away: away
    }
}
finalScore(inning, 9);

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



function getInningScore (homeScores, awayScores, numberOfInnings) {
  let homeTotal = 0;
  let awayTotal = 0;
  for (let i = 0; i < numberOfInnings; i++) {
    homeTotal = homeTotal + homeScores[i];
    awayTotal = awayTotal + awayScores[i];
    console.log(`Inning ${i + 1}: ${awayScores[i]} - ${homeScores[i]}`)
  }
  console.log(`Final Score: ${awayTotal} - ${homeTotal}`)
}

function scoreboard(inningScore, inningFunction, numberOfInnings) {
  const homeScores = [];
  const awayScores = [];

  for (let i = 0; i < numberOfInnings; i++) {
    homeScores[i] = inningFunction();
    awayScores[i] = inningFunction();
  }

  return inningScore(homeScores, awayScores, numberOfInnings);
}

scoreboard(getInningScore, inning, 9);
