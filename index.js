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
 *    - The scope of the count variable is global in the counter2 code, which means   it can be accessed outside of the function while the count variable in counter1 is nested within CountMaker and can only be accessed by the function. 
 * 2. Which of the two uses a closure? How can you tell?
 * *  - Counter1 has closure because the variables and function is enclosed within the CounterMaker function.
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *    - Count1 would be preferrable if the count variable is needed ONLY for the single method, while counter2 would be preferrable if the count variable is required for multiple methods. 
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
  return Math.floor(Math.random() * Math.floor(3))
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

function finalScore(cb, innings){
  let score = {};
  let homeScore = 0, awayScore = 0; 
  for(let i = 0; i < innings; i++)
  {
      let currentHomeScore = cb(); 
      let currentAwayScore = cb();
      homeScore += currentHomeScore; 
      awayScore += currentAwayScore; 
  }
  
  score.home = homeScore; 
  score.away = awayScore; 
  
  return score; 
  
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


function scoreboard(getInningScore, cb, innings) {
  let homeScore = 0, awayScore = 0;
  let array = []; 
  
  getInningScore(array, cb, innings);
  
  for(let i=0; i < array.length; i++)
  { 
    homeScore += array[i].home; 
    awayScore += array[i].away; 

    if(array[i].inning === 1)
    {
    console.log(`${array[i].inning}st inning -- Away: ${awayScore} - Home  ${homeScore}`);
    } 
    else if(array[i].inning === 2)
    { 
      console.log(`${array[i].inning}nd inning -- Away: ${awayScore} - Home  ${homeScore}`);
    }
    else if(array[i].inning === 3)
    { 
      console.log(`${array[i].inning}rd inning -- Away: ${awayScore} - Home  ${homeScore}`);
    }
    else
    {
      console.log(`${array[i].inning}th inning -- Away: ${awayScore} - Home  ${homeScore}`);
    }
  }
  
  // console.log(awayScore, homeScore); 
  return `Final Score: Away: ${awayScore} - Home ${homeScore}`; 
}

function getInningScore(array, cb, innings)
{ 
 for(let i = 0; i < innings; i++)
 { 
   let obj = {}; 
   obj.inning = i + 1; 
   obj.home= cb(); 
   obj.away = cb(); 
  //  console.log(`${obj.inning} inning -- Away: ${obj.away} - Home: ${obj.home}`); 
   array.push(obj); 
 }
 return array; 
}

scoreboard(getInningScore, inning, 5); 
scoreboard(getInningScore, inning, 5); 

