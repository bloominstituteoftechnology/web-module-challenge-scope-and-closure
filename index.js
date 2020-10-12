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
 >
 * 
 * 2. Which of the two uses a closure? How can you tell?
 > counter1 uses a closure because it is calling a function within a function. The inner function, counter(), is the closure in this case. 
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better?
 >  
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

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

// function inning(){
//   let runs = Math.floor(Math.random() * 3);
//   return runs;
// }

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

// function finalScore(callback, numInnings){
//   let homeTeam = 0;
//   let awayTeam = 0;
//   for (let i = 0; i < numInnings; i++){
//     const runsScored = callback();
//     homeTeam = homeTeam + runsScored;
//   }
//   for (let i = 0; i < numInnings; i++){
//     const runsScored = callback();
//     awayTeam = awayTeam + runsScored;
//   }
//   var final = {
//     Home: homeTeam,
//     Away: awayTeam,
//   };
//   return final;
// }
// console.log(finalScore(inning, 9));

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

function inning(){
  let runs = Math.floor(Math.random() * 3);
  return runs;
}

function getInningScore(theInning, away, home){
  if (theInning == 1){
    console.log(`${theInning}st inning: ${away} - ${home}`); /* CODE HERE */
  } else if (theInning == 2){
    console.log(`${theInning}nd inning: ${away} - ${home}`); /* CODE HERE */
  } else if (theInning == 3){
    console.log(`${theInning}rd inning: ${away} - ${home}`); /* CODE HERE */
  } else {
    console.log(`${theInning}th inning: ${away} - ${home}`); /* CODE HERE */
  }
}

function scoreboard(callback1, callback2, numInnings){
  let homeTeam = 0;
  let awayTeam = 0; 

  for (let inningNumber = 1; inningNumber <= numInnings; inningNumber++){
    var runsScored = callback1();
    homeTeam = homeTeam + runsScored;
    var runsScored = callback1();
    awayTeam = awayTeam + runsScored;
    callback2(inningNumber, awayTeam, homeTeam);
    }
  return `Final Score: ${awayTeam} - ${homeTeam}`
}
console.log(scoreboard(inning, getInningScore, 9));


