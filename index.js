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
 * counter 1 is as higher-order function. 
 * 2. Which of the two uses a closure? How can you tell?
 * Counter1 uses a closure, an inner function.
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
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

function inning(){
  let score=Math.round(Math.random()*2);

  return score;
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

function inning(){
  let score=Math.round(Math.random()*2);

  return score;
}




function finalScore(callback,inningsCount){
  let scoreBoard={ 
      home:0,
      away:0, 
  }

  for(let i=1;i<=inningsCount;i++){
      scoreBoard.home+=callback();
      scoreBoard.away+=callback();
  }console.log(scoreBoard);
  return scoreBoard;
}
finalScore(inning,9)
  



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

//function cycles through innings and returns the score for that inning in a string ex "6th inning: awayTeam [7]- homeTeam [11]"...

//getInningFunction gets the score

// function getInningScore(team1,team2){
//   returns ""
// }


function scoreBoard(finalScore, inning, numberOfInnings) {
    
  finalScore(inning,numberOfInnings)
  return `${inning} inning: ${score.home}-${score.away}`
}

 console.log(scoreBoard(finalScore,9,9)) 
