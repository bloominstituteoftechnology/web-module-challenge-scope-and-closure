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
 * They will both count in a incrument of one each time the function is called. counter1 uses closure and counter2 does not.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * counter1 uses closure. I can tell because the function counterMaker returns the function counter.
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * 
 * counter1 would be preferable when we have alot of different varables we would like to have a counter for but each count be seperate. counter2 would be preferable when we are counting only one varable.
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

function finalScore(callback1, innings){
  let homeTeam = 0;
  let awayTeam = 0;
  for(let i = 0; i < innings; i++){
    homeTeam += callback1();
    awayTeam += callback1();
  }
  return {homeTeam, awayTeam};
}


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

function getInningScore(callback1, score){
  return score += callback1();
}

function scoreboard(callback1, callback2, innings){
  let homeTeam = 0;
  let awayTeam = 0;
  array =[];
  for (let i = 0; i < innings; i++){
    let english = "th";
    if(i === 1){
      english = "st";
    }
    else if(i === 2){
      english = "nd";
    }
    else if(i === 3){
      english === "rd";
    }
    homeTeam = getInningScore();
    awayTeam = getInningScore();
    console.log(homeTeam);
    console.log(awayTeam);





    // return `${i}${english} inning: ${homeTeam} - ${awayTeam}`;
  }
  // return 
}


