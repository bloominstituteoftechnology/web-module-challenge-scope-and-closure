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
  counter2 has a global variable but counter1 is a private variable.
  2. Which of the two uses a closure? How can you tell?
  countmaker used a closure because it returns a function
  3. In what scenario would the counter1 code be preferable? In what scenario would 
     counter2 be better?  
  counter1 is good to used inside of a function as counter2 can be used in mulitple functions due to being lexical.

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

function inning(inning,number){
    return{
      home: inning()*Number,
      away: inning()*Number,

    }
}
console.log(inning,number())

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

// function finalScore(inning,1){
//   inning(inning,number){
//     return{
//       home: inning(1)*Number,
//       away: inning(1)*Number,
// }
// function finalScore(inning,2){
//   inning(inning,number){
//     return{
//       home: inning(2)*Number,
//       away: inning(2)*Number,
//     }
//   }
//   function finalScore(inning,3){
//     inning(inning,number){
//       return{
//         home: inning(3)*Number,
//         away: inning(3)*Number,
//       }
//     }
//     function finalScore(inning,4){
//       inning(inning,number){
//         return{
//           home: inning(4)*Number,
//           away: inning(4)*Number,
//         }
//       }
//       function finalScore(inning,5){
//         inning(inning,number){
//           return{
//             home: inning(5)*Number,
//             away: inning(5)*Number,
//           }
//         }
//         function finalScore(inning,6){
//           inning(inning,number){
//             return{
//               home: inning(6)*Number,
//               away: inning(6)*Number,
//             }
//           }
//           function finalScore(inning,7){
//             inning(inning,number){
//               return{
//                 home: inning(7)*Number,
//                 away: inning(7)*Number,
//               }
//             }
//             function finalScore(inning,8){
//               inning(inning,number){
//                 return{
//                   home: inning(8)*Number,
//                   away: inning(8)*Number,
//                 }
//               }
//               function finalScore(inning,9){
//                 inning(inning,number){
//                   return{
//                     home: inning(9)*Number,
//                     away: inning(9)*Number,
//                   }
//                 }
//                 function finalScore(inning,10){
//                   inning(inning,number){
//                     return{
//                       home: inning(10)*Number,
//                       away: inning(10)*Number,
//                     }
//                   }
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
function scoreboard(...args: [getInningScoreCallBack: any, number: any]) {
  unction; scoreboard(getInningScore, inning, numInnings); {
    let scoreboard = [];
    let awayTotal = 0;
    let homeTotal = 0;

    for (let i = 0; i < numInnings; i++) {
      let currentScore = getInningScore(inning);
      awayTotal = awayTotal + currentScore.Away;
      homeTotal = homeTotal + currentScore.Home;

      let score = `Inning ${i + 1}: Away ${currentScore.Away} - Home ${currentScore.Home}`;
      scoreboard.push(score);
    }

    let finalScore = `Final Score: Away ${awayTotal} - Home ${homeTotal}`;
    if (awayTotal == homeTotal) {
      finalScore = `This game will require extra innings: Away ${awayTotal} - Home ${homeTotal}`;
    }
    scoreboard.push(finalScore);

    return scoreboard;




    /* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
    function foo() {
      //console.log('its working');
      return 'bar';
    }
    export default {
      foo,
      processFirstItem,
      counter1,
      counter2,
      inning,
      finalScore,
      getInningScore,
      scoreboard,
    };
  }
}
