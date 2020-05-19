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
 *  counter1 is within the scope of the function and will continue where it left off if the function is invoked again.
 *  counter 2 is outside of the scope of the function and will reset if the function is invoked again.
 *
 * 2. Which of the two uses a closure? How can you tell?
 * 
 *  counter2 uses a closure because the function has access to a variable outside the scope of the function.
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * 
 *  counter1 would be preferable if you need to reset the counter when the function is invoked again.
 *  counter2 would be preferable if you need the counter to continue where it left off when invoked again.
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

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be
a whole number between 0 and 2. */

var score = Math.round(Math.random() * (2 - 0) + 0);

function inning(score){
  return score;
}

console.log(inning('Inning Score: ' + score));

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of
innings and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 
// I have tried many variations of this code. Code only returns 10 times the value of one inning. Both Home and Away
// Have the same value - Game will always be tied

/* INITIAL ATTEMPT, WHICH FAILED
let home = 0;
let away = 0;
  function finalScore(inning, innings) {
    for(1 = 0; 1 <= innings; i++) {
      home = home + inning(score); // error: inning is not a function
      away = away + inning(score); // error: inning is not a function
    }

    let scores = {
      Home: home,
      Away: away
    }

    return scores;

  }

  console.log(finalScore(inning, 9));

*/

/* This method produces an accurate result */
function finalScore(innings){

  var home = 0;
  var away = 0;

  for(i = 0; i <= innings; i++) {
    var home = home + (Math.round(Math.random() * (2 - 0) + 0));
  }

  for(i = 0; i <= innings; i++) {
    var away = away + (Math.round(Math.random() * (2 - 0) + 0));
  }

scores = {
  Home: home,
  Away: away
}

return scores;

}

console.log(finalScore(9));

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

/* This is the only method I could get working after several variations. Using a callback will not work because the
random value only randomizes once. If random is 1, then all 10 instances of the for loop will always be 1. Home and Away
will always be tied. */

/* This method works */
function scoreboard(innings) {
  
  var home = 0;
  var away = 0;

  for(i = 0; i <= innings; i++) {
    if(i === 1) {
      firstHome = home + (Math.round(Math.random() * (2 - 0) + 0));
      // If you do this:
      // firstHome = home + inning(); inning() will have the same value for each initiation of the for loop.
      // Doing it this way WILL have a value of 0,9, or 18 as total score. Home and Away will always be tied.
      firstAway = away + (Math.round(Math.random() * (2 - 0) + 0));
      firstInning = firstHome + ' - ' + firstAway + ' ';
    } else if(i === 2) {
      secondHome = home + (Math.round(Math.random() * (2 - 0) + 0));
      secondAway = away + (Math.round(Math.random() * (2 - 0) + 0));
      secondInning = secondHome + ' - ' + secondAway + ' ';
    } else if(i === 3) {
      thirdHome = home + (Math.round(Math.random() * (2 - 0) + 0));
      thirdAway = away + (Math.round(Math.random() * (2 - 0) + 0));
      thirdInning = thirdHome + ' - ' + thirdAway + ' ';
    } else if(i === 4) {
      fourthHome = home + (Math.round(Math.random() * (2 - 0) + 0));
      fourthAway = away + (Math.round(Math.random() * (2 - 0) + 0));
      fourthInning = fourthHome + ' - ' + fourthAway + ' ';
    } else if(i === 5) {
      fifthHome = home + (Math.round(Math.random() * (2 - 0) + 0));
      fifthAway = away + (Math.round(Math.random() * (2 - 0) + 0));
      fifthInning = fifthHome + ' - ' + fifthAway + ' ';
    } else if(i === 6) {
      sixthHome = home + (Math.round(Math.random() * (2 - 0) + 0));
      sixthAway = away + (Math.round(Math.random() * (2 - 0) + 0));
      sixthInning = sixthHome + ' - ' + sixthAway + ' ';
    } else if(i === 7) {
      seventhHome = home + (Math.round(Math.random() * (2 - 0) + 0));
      seventhAway = away + (Math.round(Math.random() * (2 - 0) + 0));
      seventhInning = seventhHome + ' - ' + seventhAway + ' ';
    } else if(i === 8) {
      eighthHome = home + (Math.round(Math.random() * (2 - 0) + 0));
      eighthAway = away + (Math.round(Math.random() * (2 - 0) + 0));
      eighthInning = eighthHome + ' - ' + eighthAway + ' ';
    } else {
      ninthHome = home + (Math.round(Math.random() * (2 - 0) + 0));
      ninthAway = away + (Math.round(Math.random() * (2 - 0) + 0));
      ninthInning = ninthHome + ' - ' + ninthAway + ' ';
    }
  }

  let homeTotal = firstHome + secondHome + thirdHome + fourthHome + fifthHome + sixthHome + seventhHome + eighthHome + ninthHome;
  let awayTotal = firstAway + secondAway + thirdAway + fourthAway + fifthAway + sixthAway + seventhAway + eighthAway + ninthAway;
  let finalScore = homeTotal + ' - ' + awayTotal;

  let scoreBoards =
    '1st Inning: ' + firstInning +
    '2nd Inning: ' + secondInning +
    '3rd Inning: ' + thirdInning +
    '4th Inning: ' + fourthInning +
    '5th Inning: ' + fifthInning +
    '6th Inning: ' + sixthInning +
    '7th Inning: ' + seventhInning +
    '8th Inning: ' + eighthInning +
    '9th Inning: ' + ninthInning +
    'Final Score: ' + finalScore

  return scoreBoards;

}

console.log(scoreboard(9));