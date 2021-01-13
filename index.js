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
 *  Counter 1 used a function inside of another fucking, counter 2 makes a global varible and uses it in the function
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * counter 1 forsure uses closure because it tries to go outside the function and grab the variable.
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *
 * i think counter 1 would be better used if it was for making a game of some sort and counter 2 for keeping score
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
function inning() {
  return Math.floor(Math.random() * 3);
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
function finalScore(inning, num){
  const finalScore = {'Home': 0, 'Away': 0}
  for (let i = 0; i < num; i++){
    finalScore.Home += inning();
    finalScore.Away += inning();
  }
  return finalScore;
}
//Task 4: 
// create a function called getInningScore 
// the function should take the inning function as an argument 
// it should return an object with with a score for home and a score for away that that populates from invoking the inning callback. */
function getInningScore(inning) {
  let Home = inning();
  let Away = inning();
  return {"Home": Home, "Away": Away}
}

/* Task 5: get inning by score 
 1. Receive a callback function, that you create, called `getInningScore`
 2. Receive the callback function `inning` from Task 2
 3. Receive a number of innings to be played
 4. Return an array where each of it's index values equals a string stating the
  Home and Away team's scores for each inning (see example below)
 5. If there's a tie, add this message with the score to the end of the array: 
     "This game will require extra innings: Away 12 - Home 12"  (see tie example below)
     If there is no tie, add this message to the end of the array: 
     "Final Score: Away 13 - Home 11"  (see no tie example below)
  HINT: `getInningScore` should be invoked by `scoreboard` and use `inning` to get and return the scores back to `scoreboard`
  
  For example: If there is no tie, invoking scoreboard(getInningScore,inning, 9) might return 
  an array of strings like this:

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


function scoreboard (inning, num) {
  let score = [];
  const inn = {"Home": 0, "Away": 0};
  for (let i = 0; i < num; i++){
    inn.Home += inning();
    inn.Away += inning();
    score.push(`Inning ${i+1}: Home ${inn.Home} - Away ${inn.Away}`);
  } if(inn.Home == inn.Away){
    score.push(`this game will need extra innings: Home ${inn.Home} - Away ${inn.Away}`);
  } else {
    score.push(`Final Score: Home ${inn.Home} - Away ${inn.Away}`);
  }
  return score;
}


