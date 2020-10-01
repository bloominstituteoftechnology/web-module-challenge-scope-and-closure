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

var str = ["foo", "bar"];
console.log("Example Challenge: ");
console.log(processFirstItem(str, (str) => str + str));

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 * Counter 1 is local
 * Counter 2 is global
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * Counter 1, function within a function
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *
 * If you do not want your count changed, counter1.
 * If you want to be able to change your count, counter2. 
 * 
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  };
}

const counter1 = counterMaker();
console.log("Counter #1 code function: ", counterMaker());
counter1();
counter1();
console.log("Counter #1 closure code function after executing twice: ", counter1());

// counter2 code
let count = 0;

function counter2() {
  return count++;
}

counter2();
counter2();
console.log("Counter #2 code function after executing twice: ", counter2());
console.log("Task #1");

/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning() {
  return Math.floor(3 * Math.random()); 
}

for (let i=0; i<5; i++) console.log("Score in random inning: ", inning());
console.log("Task #2");

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(inning, num) {
  let score= {
    Home: 0,
    Away: 0,
  };

  for (i=0; i< num; i++) {
    score["Home"] += inning();
    score["Away"] += inning();
  }
   return score;
}
console.log("The final score is: ", finalScore(inning, 9));
console.log("Task #3");

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

function scoreboard(getInningScore, inning, num) {
  let score={};
  let finalScore = getInningScore(0,0);
  let inningNum = [
    "First",
    "Second",
    "Third",
    "Fourth",
    "Fifth",
    "Sixth",
    "seventh",
    "Eighth",
    "Ninth",
  ]};

  for (i=0; i<num; i++) {
    score = getInningScore(inning(), inning());
    finalScore["Home"] += score["Home"];
    finalScore["Away"] += score["Away"];
    console.log('${inningNum[i]} inning: ${score["Away"]} - ${score["Home"]}');
  }

  console.log('Final Score: ${finalScore["Away"]} - ${finalScore["Home"]}');

  function getInningScore(val1, val2) {
    return {Home: val1, Away: val2};
  }
  
  console.log(scoreboard(getInningScore, inning, 9));
  console.log("Task #4");