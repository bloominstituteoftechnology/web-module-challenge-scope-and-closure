// ⭐️ Example Challenge START ⭐️
// Roxanne-Weber branch 
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

// global variable
const quotes = [
  {text : "Is it possible that I am not alone in believing that in the dispute between Galileo and the Church, the Church was right and the centre of man's universe is the earth?",
  author : 'Stephen Vizinczey', },
  {text : "Winter is an etching, spring a watercolor, summer an oil painting and autumn a mosaic of them all.",
  author: 'Stanley Horowitz', },
  {text : "The brotherhood of man is an integral part of Christianity no less than the Fatherhood of God; and to deny the one is no less infidel than to deny the other." ,
  author : 'Lyman Abbott'},
  {text : "Have you watched the fairies when the rain is done, Spreading out their little wings to dry them in the sun?" ,
  author : 'Rose Fyleman'},
  {text : "Unless each man produces more than he receives, increases his output, there will be less for him and all the others." ,
  author : 'Bernard Mannes Baruch'},
  {text : "In character, in manner, in style, in all things, the supreme excellence is simplicity." ,
  author : 'Henry Wadsworth Longfellow'},
  {text : "If you have men who will only come if they know there is a good road, I don't want them. I want men who will come if there is no road at all." ,
  author : 'David Livingstone'},
  {text : "We are servants rather than masters in mathematics." ,
  author : 'Charles Hermite'},
  {text : "Life being very short, and the quiet hours of it few, we ought to waste none of them in reading valueless books." ,
  author : 'John Ruskin'},
  {text : "He had a big head and a face so ugly it became almost fascinating." ,
  author : 'Ayn Rand'},
];

function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}
console.log('firstItem test:', processFirstItem(['foo','bar'],function(str){return str+str}));

// ⭐️ Example Challenge END ⭐️

// QUOTES data test

var tempArr = [...quotes];
function processFirstAuthor(stringList, callback) {
  return callback(stringList[0].author)
}
// console.log('my quote test:', processFirstAuthor(tempArr,function(str){return str + ' ' + str}));

///// M V P ///////

/*Task 1: counterMaker()
  
  Study the code for counter1 and counter2, then answer the questions below. /*
  
/*   1. What is the difference between counter1 and counter2? */
//? task 1.1: Counter 1 - the var count is not accessible outside the counter function; the counter function result is only available when countMaker runs; the function counter will begin at 0 each time the whole function countMaker is run; Counter 2 - the var count is accessible anywhere the script lives; when the function count2 is run, it will be giving incorrect information depending on where it lives as it is not reset to 0 each time it is accessed for a particular purpose");
  
/*  2. Which of the two uses a closure? How can you tell? */
//? task 1.2: Counter1 uses a closer, because the function counter is inside the countMaker function, making it inaccessible to any other function, even when it is returned. The returned value can only be accessed within the countMaker function, therefore it is closed to other functions that reside in the same place");

/* 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? */
//? task 1.3:', "If there is more than one function within a program that needs to access this counter function, counter1 is better");

//! *****QUESTION FOR CLASS******  will this initiate a new 0 start each time an individual function outside of counterMaker calls it 

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


/* ⚾️⚾️⚾️ Task 2: inning() ⚾️⚾️⚾️
Use the inning function below to do the following:
  1. Return a random whole number of points between 0 and 2 scored by one team in an inning
  
  For example: invoking inning() should return a numerical score value of 0, 1, or 2
  
NOTE: This will be a callback function for the tasks below
*/

function inning() {
  // get names from the database or API
  let score =  Math.floor(Math.random() * 3);

  return score;
  }  



/* ⚾️⚾️⚾️ Task 3: finalScore() ⚾️⚾️⚾️
Use the finalScore function below to do the following:
  1. Receive the callback function `inning` that was created in Task 2 
  2. Receive a number of innings to be played
  3. After each inning, update the score of the home and away teams
  4. After the last inning, return an object containing the final (total) score of the innings played
  
  For example: invoking finalScore(inning, 9) might return this object:
{
  "Home": 11,
  "Away": 5
}
*/ 

function finalScore(callback, inningNum = 9) {
  let home = 0;
  let away = 0; 
  for (let i = 0; i < inningNum; i++) {
// total scores
    home = home + callback();
    away = away + callback();
  }
  const inningScores = {
    'Home' : home,
    'Away' : away,
  };
  return inningScores;
}
console.log(finalScore(inning));





/* ⚾️⚾️⚾️ Task 4: getInningScore() ⚾️⚾️⚾️
Use the getInningScore() function below to do the following:
  1. Receive a callback function - you will pass in the inning function from task 2 as your argument 
  2. Return an object with a score for home and a score for away that populates from invoking the inning callback function */

function getInningScore(/*Your Code Here */) {
  /*Your Code Here */
}


/* ⚾️⚾️⚾️ Task 5: scoreboard() ⚾️⚾️⚾️
Use the scoreboard function below to do the following:
  1. Receive the callback function `getInningScore` from Task 4
  2. Receive the callback function `inning` from Task 2
  3. Receive a number of innings to be played
  4. Return an array where each of it's index values equals a string stating the
  Home and Away team's scores for each inning.  Not the cummulative score.
  5. If there's a tie at the end of the innings, add this message containing the score to the end of the array:  "This game will require extra innings: Away 12 - Home 12"  (see tie example below)
     If there isn't a tie, add this message to the end of the array: "Final Score: Away 13 - Home 11"  (see no tie example below)
  
  NO TIE example: invoking scoreboard(getInningScore,inning, 9) might return 
  an array of strings like this:
[
  "Inning 1: Away 1 - Home 2", 
  "Inning 2: Away 2 - Home 1",
  "Inning 3: Away 0 - Home 2", 
  "Inning 4: Away 2 - Home 2", 
  "Inning 5: Away 2 - Home 0", 
  "Inning 6: Away 1 - Home 1", 
  "Inning 7: Away 0 - Home 2", 
  "Inning 8: Away 2 - Home 2",
  "Inning 9: Away 1 - Home 0", 
  "Final Score: Away 11 - Home 12"  
]

  TIE example: invoking scoreboard(getInningScore,inning, 9) might return 
  an array of strings like this:
[
  "Inning 1: Away 1 - Home 1", 
  "Inning 2: Away 2 - Home 2",
  "Inning 3: Away 1 - Home 0", 
  "Inning 4: Away 1 - Home 2", 
  "Inning 5: Away 0 - Home 0", 
  "Inning 6: Away 2 - Home 1", 
  "Inning 7: Away 0 - Home 2", 
  "Inning 8: Away 2 - Home 1",
  "Inning 9: Away 1 - Home 1", 
  "This game will require extra innings: Away 10 - Home 10"
]  
  */

function scoreboard(/* CODE HERE */) {
  /* CODE HERE */
}




/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo(){
  console.log('its working');
  return 'bar';
}
foo();
module.exports = {
  foo,
  processFirstItem,
  counter1,
  counter2,
  inning,
  finalScore,
  getInningScore,
  scoreboard,
}
