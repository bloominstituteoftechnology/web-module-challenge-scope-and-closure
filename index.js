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
 *    counter1 'count' variable is in the local scope the counterMaker function. counter2 'count' variable is in the global scope.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 *    counter1, it has access to the count variable inside the parent function.
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better?
 * 
 *    counter1 is preferable when you want to reuse the counterMaker function and have seprate count variables. count2 would be better if you only need to use the function once and want just one variable.
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

    return Math.floor(Math.random()*3);

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

function finalScore(inputFunction,inputInnings){    // finalScore takes an input function and an input innings

  let score = [];                                   // initialize score array for return object
  let away = 0;                                     // initialize away score variable
  let home = 0;                                     // initialize home score variable

  for (let i=0; i<inputInnings; i++){               // run a for loop that runs as long as the number taken in the input innings
    away+=inputFunction();                          // get a random score from the input function and add it to away variable
    home+=inputFunction();                          // get a random score from the input function and add it to home variable
  }

  score.push({                                      // push the home and away scores to the score array in the form of an object
    Home: inputFunction(),
    Away: inputFunction()
  })

  return score;                                     // return the score object
}

console.log(finalScore(inning,9))

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


function getInningScore(inputInning, awayScore, homeScore){               // getInningScore takes the current inning, away score and home score as inputs
  if(inputInning === 1){                                                  // console.log output for 1st inning
    console.log(`1st inning: ${awayScore} - ${homeScore}`)
  } else if(inputInning === 2){                                           // console.log output for 2nd inning
    console.log(`2nd inning: ${awayScore} - ${homeScore}`)
  }else if(inputInning === 3){                                            // console.log output for 3rd inning
    console.log(`3rd inning: ${awayScore} - ${homeScore}`)
  }else{
    console.log(`${inputInning}th inning: ${awayScore} - ${homeScore}`)   // console.log output for subsequent innings
  }
}

function scoreboard(inputInningScore, showInningScore, numOfInnings) {    // scoreboard takes in a a function for a random score, a function to print out each line of the inning score and a number of innings played
  let homeScore=0;                                                        // initalize variable for home score
  let awayScore=0;                                                        // initalize variable for away score

  for(let inningNumber=1; inningNumber<=numOfInnings; inningNumber++){    // for loop that runs as many times as innings specified
    let homeRunsScored=inputInningScore();                                // get an inning score for home
    homeScore=homeScore+homeRunsScored;                                   // add the above value to the total score
    let awayRunsScored=inputInningScore();                                // get an inning score for away
    awayScore=awayScore+awayRunsScored;                                   // add the above value to the total score
    showInningScore(inningNumber, awayScore, homeScore);                  // call getInningScore, give it the current inning number, away score and home score
  }
  return `Final Score: ${awayScore} - ${homeScore}`                       // return Final Score line
}

console.log(scoreboard(inning, getInningScore, 9))