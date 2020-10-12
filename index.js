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
 *  counter 1 saves count as persistent data (known as persistent lexically scoped refernce data). This data stores the result of count in the functions refernce scope and will increment the counter and save result permanetly.
 * 2. Which of the two uses a closure? How can you tell?
 * Depends on the implementation of these of these two functions. As it sits right now function 2 utilizes closure as it has to "reach out" of the function to refernce the global counter. However if we were to run the counter function inside example one it would also be utilizing closure to acheive the incramenation of the counter. (IE)
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *Counter 1 is preferrable in most cases in Javascript, it is more secure and flexable because it can be used to create multiple counters. Scenario 2 is easier to use and implement if we only need one counter, in order to use then first counter we need to create a new function and set its value to the result of the function CounterMaker. Otherwise if we try to just run CounterMaker, the result will be [function: counter] and if we try to call the counter function from the outside the outer function we will get a reference error because that inner function does not exist in the global scope. 
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

function inning('points'){
    return Math.floor(Math.random() * Math.floor(3));
  }
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

function finalScore(final, num){
  let score = {Home: 0, Away: 0};
  
for(let i = 0; i<=num; i++){
  score.Home += final();
  score.Away += final();
}
return score;
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


function scoreboard(getInningScore, prior, numInnnings) {
  let board = [];
  let homeFinalScore = 0;
  let awayFinalScore = 0;
  for (let i = 1; i <= numInnnings; i++){
    board.push(Inning ${i}: ${getInningScore(prior)});
    homeFinalScore += homeFinalScore;
    awayFinalScore += awayFinalScore;
  }
  board.push (Final Score: Away Team: ${awayFinalScore} - Home Team: ${homeFinalScore});
  return board;
}
console.log(scoreBoard(getInningScore, inning, 9));

