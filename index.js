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
 *  counter1 doesn't implement scope, instead it has the initial value assigned within the function, and that initial value will never change.
 *  
 *  counter2 implements scope, so the 'count' value will always be the updated number, not 0 like counter1.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 *  Counter1, since all needed code sits inside the function.
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better?
 * 
 *  Counter1 would be useful if the initial value for 'count' always needs to be '0' at the start.
 * 
 *  Counter2 would be useful if the value for 'count' would be constantly updated.
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

function inning() {
  return Math.floor(Math.random() * (2 - 0)) + 2;
}

// let output = inning();
// console.log(output);

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(numOfInnings) {
  let homeSum = 0;
  let awaySum = 0;

  for (var i = 0; i <= numOfInnings; i++) {
    homeSum += inning();
    awaySum += inning();
  }

  let matchStats = {
    'Home': homeSum,
    'Away': awaySum,
  };

  return matchStats;
}

// let output2 = finalScore(9);
// console.log(output2);

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

function scoreboard(numOfInnings) {
  let homeScore = 0;
  let awayScore = 0;

  for (var i = 1; i <= numOfInnings; i++) {
    let currentInning = i;
    homeScore += inning();
    awayScore += inning();
    if (currentInning === 1) {
      console.log(`${currentInning}st inning: ${homeScore} - ${awayScore}`);
    } else if (currentInning === 2) {
      console.log(`${currentInning}nd inning: ${homeScore} - ${awayScore}`);
    } else if (currentInning === 3) {
      console.log(`${currentInning}rd inning: ${homeScore} - ${awayScore}`);
    } else if (currentInning > 3 && currentInning !== numOfInnings) {
      console.log(`${currentInning}th inning: ${homeScore} - ${awayScore}`);
    } else if (currentInning === numOfInnings) {
      console.log(`${currentInning}th inning: ${homeScore} - ${awayScore}`);
      console.log(`Final Score: ${homeScore} - ${awayScore}`);
    }
  }
}

// let output3 = scoreboard(9);
// output3;
