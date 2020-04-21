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
 * Counter1 uses two functions in order to use counter1 you'd use counterMaker(parameter) to use counter2 you
 * could simply call counter2() but count needs to be set beforehand.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * Counter1 uses a closure it uses a parent element to set the variable, and child function to increment it.
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * 
 * counter2 will be better if you need to manipulate the count variable. Counter1 is better if you need to set
 * multiple scores at once.
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

function inning(){
  let random = Math.random() * 50;
  // creates variable set to a random value between 0-49
  if(random >= 35){
    let score = 2;
    return score; 
  }
  // returns 2 points if random number is over or equal to 35
  else if(random > 21 && random < 35){
    let score = 1;
    return score;
  }
  // returns 1 point if random number is between 21 and 35
  else{
    let score = 0;
    return score;
  }
  //otherwise no points
}


// console.log(inning());


/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(inning, number){
let home = 0;
let away = 0;
let finalScore = {};
  for(let i = 0; i < number;i++){
    home += inning(home);
    away += inning(away);
    }
    finalScore.Home = home;
    finalScore.Away = away;
    return finalScore;
  }

// console.log(finalScore(inning, 9));
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

function scoreboard(inning, number) {
  let homeFS = 0;
  let awayFS =0;
  for(let i = 1; i <= number; i++){
    let homeTeam=inning();
    let awayTeam=inning();
    if(i ==  1){
    console.log(`${i}st inning: ${awayTeam} - ${homeTeam}`);
    }
    else if(i ==  2){
      console.log(`${i}nd inning: ${awayTeam} - ${homeTeam}`);
      }
      else if(i ==  3){
        console.log(`${i}rd inning: ${awayTeam} - ${homeTeam}`);
        }
        else{
          console.log(`${i}th inning: ${awayTeam} - ${homeTeam}`);
          }
    homeFS+=homeTeam;
    awayFS+=awayTeam;
  }
  console.log(`Final score: ${awayFS} - ${homeFS}`)
}

scoreboard(inning, 9);
