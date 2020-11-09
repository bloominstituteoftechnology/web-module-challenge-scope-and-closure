// ⭐️ Example Challenge START ⭐️

/**Example Task : processFirstItem()
 * This example shows how you might go about solving the rest of the tasks
 * 
 * Use the higher order function processFirstItem below to do the following:
 *  1. Receive an array of strings in a parameter
 *  2. Receive a callback function that takes a string as its argument in a parameter
 *  3. Return the result of invoking the callback function and passing in the FIRST 
 *     element in the array as the argument
 * 
 * The following code is demonstrating a way of completing this task
 * It returns the string `foofoo`
*/

function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}
console.log(processFirstItem(['foo','bar'],function(str){return str+str}));

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/*Task 1: counterMaker()
  
  Study the code for counter1 and counter2, then answer the questions below.
  
  1. What is the difference between counter1 and counter2?
  counter 1 will remember its number no matter how many times its called, counter 2 will forget every time
  2. Which of the two uses a closure? How can you tell?
  the first one, function in function
  3. In what scenario would the counter1 code be preferable? In what scenario would 
     counter2 be better? 
  a more long term setting would fit the first one better, while the second one would be better if it only needs to count each run.
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
Use the inning function below to do the following:
  1. Return a random whole number of points between 0 and 2 scored by one team in an inning
  
  NOTE: You will be using this function over and over again in the tasks below
  For example: invoking inning() should return a numerical score value of 0, 1, or 2
*/

function inning(){
  return Math.floor(Math.random() * 3);
}

/* Task 3: finalScore()
Use the finalScore function below to do the following:
  1. Receive the callback function `inning` that was created in Task 2 
  2. Receive a number of innings to be played
  3. After each inning, update the score of the home and away teams
  4. After the last inning, return an object containing the final (total) score of the game
For example: invoking finalScore(inning, 9) might return this object:
{
  "Home": 11,
  "Away": 5
}
*/ 

function finalScore(inning, num){
  const fscore = {"Home": 0, "Away": 0}
  for(let i = 0; i < num; i++){
    fscore.Home += inning();
    fscore.Away += inning();
  }
  return fscore;
}

/* Task 4: 
// create a function called getInningScore 
// the function should take the inning function as an argument 
// it should return an object with with a score for home and a score for away that that populates from invoking the inning callback. */

function getInningScore(inning) {
  let home = inning();
  let away = inning();
  return {"Away": away, "Home": home}
}
/* Task 5: scoreboard()
Use the scoreboard function below to do the following:
  1. Receive a callback function, that you create, called `getInningScore`
  2. Receive the callback function `inning` from Task 2
  3. Receive a number of innings to be played
  4. Return an array where each of it's index values equals a string stating the
  Home and Away team's scores for each inning (see example below)
  5. If there's a tie, add this message with the score to the end of the array: 
     "This game will require extra innings: Away 12 - Home 12"  (see tie example below)
     If there is no tie, add this message to the end of the array: 
     "Final Score: Away 13 - Home 11"  (see no tie example below)
  HINT: `getInningScore` should be invoked by `scoreboard` and use `inning` to get and return the scores back to `scoreboard`
  
  For example: If there is no tie, invoking scoreboard(getInningScore,inning, 9) might return 
  an array of strings like this:
[
  "Inning 1: Away 1 - Home 2", 
  "Inning 2: Away 2 - Home 3",
  "Inning 3: Away 4 - Home 4", 
  "Inning 4: Away 5 - Home 5", 
  "Inning 5: Away 7 - Home 7", 
  "Inning 6: Away 9 - Home 8", 
  "Inning 7: Away 10 - Home 8", 
  "Inning 8: Away 12 - Home 9",
  "Inning 9: Away 13 - Home 11", 
  "Final Score: Away 13 - Home 11"  
]  
  If there is a tie, invoking scoreboard(getInningScore,inning, 9) might return 
  an array of strings like this:
[
  "Inning 1: Away 1 - Home 2", 
  "Inning 2: Away 2 - Home 3",
  "Inning 3: Away 4 - Home 4", 
  "Inning 4: Away 5 - Home 5", 
  "Inning 5: Away 7 - Home 7", 
  "Inning 6: Away 9 - Home 8", 
  "Inning 7: Away 10 - Home 8", 
  "Inning 8: Away 12 - Home 10",
  "Inning 9: Away 12 - Home 12", 
  "This game will require extra innings: Away 12 - Home 12"
]  
  */

function scoreboard(inning, num) {
  let score = [];
  const inn = {"Away": 0, "Home": 0};
  for(let i = 0; i < num; i++){
    inn.Home += inning();
    inn.Away += inning();
    score.push(`Inning ${i+1}: Away ${inn.Away} - Home ${inn.Home}`);
  }
  if(inn.Away == inn.Home){
    score.push(`This game will require extra innings: Away ${inn.Away} - Home ${inn.Home}`);
  }else{
    score.push(`Final Score: Away ${inn.Away} - Home ${inn.Home}`);
  }
  return score;
}

/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo(){
  console.log('its working');
  return 'bar';
}
export default{
  foo,
  processFirstItem,
  counter1,
  counter2,
  inning,
  finalScore,
  getInningScore,
  scoreboard,
}