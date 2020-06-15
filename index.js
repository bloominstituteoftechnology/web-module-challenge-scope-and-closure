// Example Challenge START

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



///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?

 counter1 uses the private variable `count` to keep track of the score, while
 counter2 uses a variable `count` described outside the function.

 * 2. Which of the two uses a closure? How can you tell?

 counter1 makes use of closer through the child function `counter()`
 using the variable `count` from the parent function. While counter2
 does something similar, function counter2 is a parent, not a child,
 and the variable `count` is a global variable. 

 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 

 counter1/counterMaker is better when you need to track several
 independent counters. The problem with this approach is that you
 cannot access the count without incrementing the counter. counter2
 addresses this issue, since count is defined as a global
 variable. However, a new count variable and a new function must be
 defined for every score you need to keep track of.


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

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

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

function finalScore(inning, numInnings){
    const obj = {
	Home: 0,
	Away: 0,
    }
    for (let i = 0; i < numInnings; i++) {
	obj.Home += inning();
	obj.Away += inning();
    }
    return obj;
}
console.log(finalScore(inning, 9));


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

function scoreboard(inning, numInnings) {
    const obj = {
	Home: 0,
	Away: 0,
    }
    const printObj = inningNumber => {
	if (inningNumber == 0) {
	    var string = '1st';
	} else if (inningNumber == 1) {
	    var string = '2nd';
	} else if (inningNumber == 2) {
	    var string = '3rd';
	} else {
	    var string = (inningNumber+1) + 'th';
	}
	console.log(string, 'inning: ', obj.Home, ' - ', obj.Away);
    }
    
    for (let i = 0; i < numInnings; i++) {
	obj.Home += inning();
	obj.Away += inning();
	printObj(i);
    }
    console.log()
    console.log('Final Score: ', obj.Home, ' - ', obj.Away);
}

scoreboard(inning, 9);
