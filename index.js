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
 * The difference is that counter1 logs the variable inside the function and counter2 logs it in the global scope.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * Counter2 does because it references a variable outside the function. 
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * Counter1 when you only need to access the variable in the function. Counter2 when you want to access the variable globally.
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
  let runsScore = Math.floor(Math.random() * 3);
  return runsScore
}

inning();


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
  let Home = 0;
  let Away = 0;
  for (i = 0; i < num; i++) {
    Home += inning();
    Away += inning();
  }
  return `Home Team Runs:${Home} \nAway Team Runs:${Away}`;
}


console.log(finalScore(inning, 9));



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
let runs = {}
let finalScore = getInningScore(0,0);
let topOfInning = [
  "1", "2", "3", "4", "5", "6", "7", "8","9",
];  

for (i = 0; i < num; i++) {
  runs = getInningScore(inning(), inning());
  finalScore["Home Team"] += runs ["Home Team"];
  finalScore["Away Team"] += runs ["Away Team"];
  console.log(`${topOfInning[i]} inning: ${runs["Home Team"]} - ${runs["Away Team"]}`);
}
console.log(`Final: ${finalScore["Away Team"]} - ${finalScore["Home Team"]}`);

}
 function getInningScore(team1,team2){
   return {Home: team1, Away: team2};
 }

console.log(scoreboard(getInningScore,inning,9))


// function final(){


//