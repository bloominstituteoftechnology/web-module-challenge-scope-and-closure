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
  counter1 has declared the varible count inside the scope of the function, while counter2 is outside the scope of the function.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * The closure is located in counter because the varible of counter is located within the scope of the function. It also has access to the outer function’s variables as well as the global variables.
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *
 * Yes, counter1 would be perferable to counter2 because the varible is protected. counter2 would be useful if you wanted to add other functions within the scope of the brackets.
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

function inning() {

    return Math.round(Math.random() * 2)

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

function finalScore(callback, inning) {
    let Home = 0;
    let Away = 0;
    for (let i = 0; i < inning; i++) {
        Home = callback() + Home;
    }

    for (let i = 0; i < inning; i++) {
        Away = callback() + Away;
    }

    console.log(`Home: ${Home}`)
    console.log(`Away: ${Away}`)
}

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

Final Score: awayTeam - homeTeam * /

function getInningScore(callback, inning) {
    let Score = 0
    for (let i = 0; i < inning; i++) {
        Score = callback() + Score;
    }
    return Score;

}


function scoreboard(callback1, callback2, innings) {
    let Home = 0
    let Away = 0
    for (let i = 1; i <= innings; i++) {
        Home = cb1(cb2, i);
        Away = cb1(cb2, i);
        console.log(`inning ${i}: Home: ${Home} - Away: ${Away}`)
    }

    console.log(`Final Score: ${Home} - ${Away}`)

}