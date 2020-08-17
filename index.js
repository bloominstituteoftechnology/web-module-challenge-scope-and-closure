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
 * counter 1 declares count inside the function where as counter 2 declares it before the function. It also uses another function in itself to accomplish the same task while counter2 only uses a couple lines of code.
 * 2. Which of the two uses a closure? How can you tell?
 * the first uses closure
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * counter
 * counter1 seems like it would be better for redoing the same exact thing at different points with less work to call on it.
 * counter2 seems like it would 
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
let points = Math.floor(Math.random() * 3); 
return(points);
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

function finalScore(scoremaker, innings){
  let homescore = 0;
  let awayscore = 0;
    for(let i = 0; i < innings; i++){
      homescore = homescore + scoremaker();
      awayscore = awayscore + scoremaker();
    }
  const thefinalscore = {
    "home": homescore,
    "away": awayscore
  }
 return(thefinalscore);
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
const inningscores =[
  {inning: 1, score: ""},
  {inning: 2, score: ""},
  {inning: 3, score: ""},
  {inning: 4, score: ""},
  {inning: 5, score: ""},
  {inning: 6, score: ""},
  {inning: 7, score: ""},
  {inning: 8, score: ""},
  {inning: 1, score: ""},
  {endscore: {home: "", Away: ""}}
]
let scorecount = [0,0]

function scoreboard(func1, func2, innings) {
  for(let i=0; i < innings; i++){
    inningscores[i]["score"] = func1(func2, 1);
    scorecount[0] = scorecount[0] + inningscores[i]["score"]["home"];
    scorecount[1] = scorecount[1] + inningscores[i]["score"]["away"];
  }
  inningscores[9]["endscore"]["home"] = scorecount[0];
  inningscores[9]["endscore"]["Away"] = scorecount[1];
  return(inningscores);
}
console.log(scoreboard(finalScore,inning,9));


