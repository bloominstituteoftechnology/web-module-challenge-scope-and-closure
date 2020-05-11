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
 *    Counter1 is saving the information as well as adding 1 so when you console.log it, it will show the old and new number
 *    whereas, counter2 will only give you 1 because it has no memory of the imcremental operator.
 *  
 * 2. Which of the two uses a closure? How can you tell?
 *     Counter2 is using a closure because its accessing a variable that is outside its function scope.
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *      Counter1 would work better if you didn't need to access information from this function a lot. Also would work well when making smaller files.
 *      Counter2 would better be used in a more larger file where you might need to access information from this function multiple times through out your code.
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

Write a function called `inning` that generates a random number of points that a team scored in an inning. 
This should be a whole number between 0 and 2. */

function inning(randomScore){
  var scoreGenerator = 0;
  for ( let i = 0; i < randomScore; i++){
   var pointsPerInning = Math.round(Math.random(0,1,2));
  }
  return(scoreGenerator/randomScore);
}

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) 
and a number of innings and and returns the final score of the game in the form of an object.
For example, 
finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}
*/ 

function finalScore(inning, numOfInn ){
  let Home = 0;
  let Away = 0;
  for(let i =0; i <= numOfInn; i++){
    H =+ inning;
    A += inning;
  }
  return{
    'Home' : H;
    'Away' : A;
  };
}
console.log(finalScore(inning,9));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `inning` that you wrote above
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: 0 - 2
2nd inning: 1 - 3
3rd inning: 1 - 3
4th inning: 2 - 4
5th inning: 4 - 6
6th inning: 4 - 6
7th inning: 4 - 6
8th inning: 5 - 8
9th inning: 6 - 10

Final Score: 6 - 10 */

function scoreboard(inning,numOfInn) {
  let score = {
    'Home': 0,
    'Away': 0
  }
  let arrScore = [];
  for(let i = 1, i <= numOfInn; i++){
    score['Home'] += inning();
    score['Away'] += inning();
    if(i==1){
      arrScore.push(`1st inning: ${score['Home']} - ${score['Away']}`);
    }
    else if(i==2){
      arrScore.push(`2nd inning: ${score['Home']} - ${score['Away']}`);
    }
    else if(i==3){
      arrScore.push(`3rd inning; ${score['Home']} - ${score['Away']}`);
    }
    else{
      arrScore.push(`${i}th inning: ${score['Home']} - ${score['Away']}`);
    }
  }
  console.log(arrScore)
}
scoreboard(inning,9);


