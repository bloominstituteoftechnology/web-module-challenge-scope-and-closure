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
 * A: Counter1 declared as function expression while counter 2 is declared as a function
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * A: Counter2 uses closure since it is declared as a function and function's bracket's open a functional scope 
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * A: 
 *   - In scenarios where we would want to only have a function we would use counter2(), which can't be anything else but function
 *   - In scenarios where we would like to use hoisting (call function before it is declared below), we would use counter2()
 *   - In scenarios where we would want to have value of a counter to be assigned different value then we would prefer counter1()
 *   
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }


}

const counter1 = counterMaker(); // counter1 declared as a function expression


// counter2 code
let count = 0;

function counter2() { //counter 2 declared as function
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){
 
  let points = Math.round(Math.random()*2);
  return points;
    /*Code Here*/
}

console.log(inning());

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above)
and a number of innings and and returns the final score of the game in the form of an object.

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
 /*Code Here*/
}

console.log(finalScore(inning,9));

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

function scoreboard(callback, inn) {
  // declare an object with 0 values (starting values of the game)
  let gameScore = {Home: 0, Away: 0};

  // loop (that starts from i=1 meant for inning starting from 1) to go throug as much as "inn" argument's "parameter value"
  for(let i = 1; i<=inn; i++) {
    let homeScore = callback();
    let awayScore = callback();
    
    gameScore.Home+=homeScore;
    gameScore.Away+=awayScore;

    // function within the loop to go take 
    function writesInningScore(){
      if(i===1){
        return `${i}st inning: ${gameScore.Home} - ${gameScore.Away}`;
      }
      else if(i===2){
        return `${i}nd inning: ${gameScore.Home} - ${gameScore.Away}`;
      }
      else if(i===3){
        return `${i}rd inning: ${gameScore.Home} - ${gameScore.Away}`;
      }
      else {
        return `${i}th inning: ${gameScore.Home} - ${gameScore.Away}`;
      } 
    }

    console.log(writesInningScore());
  }

  

  return `Final Score: ${gameScore.Home} - ${gameScore.Away}`;

/* CODE HERE */
 }

console.log(scoreboard(inning, 9));



