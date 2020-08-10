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
 *    The main difference is closure where variables never go outside its function  in counter 1 while counter2s closure goes 
 *    outisde the function's scope and has variables accessible on the global block  
 * 
 * 2. Which of the two uses a closure? How can you tell?
 *    They both use closure. However counter1 does not go outside the the functions scope while counter2 does. 
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *    Counter 1 code would be quicker and more light weight. It also has the option of making count assignable as a parameter which 
 *    would be more structuralized. Either way I wold prefer counter1 over counter2 because there is more structure, the code is more condensed, and
 *    we would not have to directly access global variables to use the function. I find it easier to return a function that never accesses
 *    any thing outisde its function scope. The possiblity to make a mistake decreases as well with counter 1. 
 * 
 *    The counter2 code would be good if there was variables on the global scope we needed to access. It would not run as fast though without 
 *    a callback function and the same variable would not be accessible as a parameter with its global scope closure
*/

// counter1 code
function counterMaker() {
    let count = 0;
    return function counter() {
    return count++;
    }
}

const counter1 = counterMaker();
// console.log( 'counter1: '+counter1());
// console.log('counter1: '+counter1());
// console.log('counter1: '+counter1());
// console.log('counter1: '+counter1());
// counter2 code
let count = 0;

function counter2() {
   return count++;
}


/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. 
This should be a whole number between 0 and 2. */

function inning(){

   return Math.round(Math.random() * 3);

}
console.log('Task2: ',inning());

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function 
`inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(inning,innings){
  let finalScoreOfGame = {Home:0,Away:0};
  // a number between 0 and 1 0 means home 1 means away
  let scored = inning;
  let homeOraway;
   // let home = false;
    for(let i = innings; i <= 9; i++){
      homeOraway = Math.floor(Math.random() * Math.floor(2));
      scored = inning;
        if(homeOraway === 0){ 
          // Home scored
          console.log('Before scored '+scored+' finalscore.Home'+ finalScoreOfGame.Home);
          finalScoreOfGame.Home = finalScoreOfGame.Home + scored;
          console.log('After scored '+scored+' finalscore.Home'+ finalScoreOfGame.Home);
        }else{ // Away Scored
          console.log('Before scored '+scored+' finalscore.Away '+ finalScoreOfGame.Away);
          finalScoreOfGame.Away = finalScoreOfGame.Away + scored;
          console.log('After scored '+scored+' finalscore.Away '+ finalScoreOfGame.Away);
        }
    }
  // Assert the game never ends tied
    while(finalScoreOfGame.Home === finalScoreOfGame.Away){
      homeOraway = Math.floor(Math.random() * Math.floor(2));
      scored = inning;
      /// When inning returns only zero this will break the infinite loop
      if(scored === 0) scored = scored + 1;
        if(homeOraway === 0){ 
          // Home scored
          console.log('Before scored '+scored+' finalscore.Home'+ finalScoreOfGame.Home);
          finalScoreOfGame.Home = finalScoreOfGame.Home + scored;
          console.log('After scored '+scored+' finalscore.Home'+ finalScoreOfGame.Home);
        }else{ // Away Scored
          console.log('Before scored '+scored+' finalscore.Away '+ finalScoreOfGame.Away);
          finalScoreOfGame.Away = finalScoreOfGame.Away + scored;
          console.log('After scored '+scored+' finalscore.Away '+ finalScoreOfGame.Away);
        }
    }
  return finalScoreOfGame;
  

}
let fscore = finalScore(inning(),3);
console.log('final score task3 Home: '+fscore.Home + ' Away: '+ fscore.Away);


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


function getInningScore(inning){
  return inning();
}

function scoreboard(getInningScore, inning, numOfInnings){
  let score  = {home: 0, away: 0};
  for( let i = 0;  i< numOfInnings; i++){
      let awayScore = getInningScore(inning);
      let homeScore = getInningScore(inning);
      score.home += homeScore;
      score.away += awayScore;
      console.log(`inning ${i+1}  ${awayScore} - ${homeScore}`);
  }
  console.log(`Final score: ${score.away} - ${score.home}`);
}
scoreboard(getInningScore,inning,9);







