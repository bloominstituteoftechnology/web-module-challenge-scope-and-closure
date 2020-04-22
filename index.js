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
 * counter1 has count declared on the inside scope while counter2 
 * has it declared on the outside of the scope 
 * 2. Which of the two uses a closure? How can you tell?
 * counter1 uses a closure because the count is inside the curley brackets
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *when you want to have a seprate count declared for any other function youd use counter one
 so it can be decarled somewhere else
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

function inning(min, max ){
  return Math.floor(
    Math.random() * (max - min) + min
  )

  
    
    /*Code Here*/
    
}
console.log(inning(0,3))

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 
999
finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(inning, numOfInnings ){
   let homeTeam = 0
   let awayTeam = 0;
   for( let i = 0; i < numOfInnings; i++) {
     homeTeam = numOfInnings + inning;
     awayTeam = numOfInnings + inning;
   }
   console.log(`home: ${homeTeam} away: ${awayTeam}`)
  /*Code Here*/

}
console.log(finalScore(inning(0,3), 9))

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(2) A number of innings

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






function scoreboard(cbInning, inningNum) {
  let score = [];
  let homeTeam = 0;
  let awayTeam = 0;
  for(let i = 0; i < inningNum ; i++){

    let home = inningNum+cbInning;
    let away = inningNum +cbInning;
    
    homeTeam += home;
    awayTeam += away;

    score.push('Inning'+  i  + ':' + away + '-' + home)

  }

  score.push('Total Score :'+ `${homeTeam}` + '-' + `${awayTeam}`)

  return score;

  /* CODE HERE */
}

console.log(scoreboard(inning(0,2), 9));


