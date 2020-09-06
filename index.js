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
 The code for counter1 has a count variable that is scoped within the function counterMaker(). This variable can only be accessed within the function by the function. It then has another function nested which increases the variable count. It can access the count variable outside its scope.
 
 The counter 2 code pulls data and pushes data to the global variable count data to be stored in memory so that the count is increased each time the function is invoked.
 
 * 2. Which of the two uses a closure? How can you tell?

 Counter1 code uses closure. I can tell because there is a function that is wrapped inside a parent function. It is capable of getting data from the parent function.

 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *    
 Counter1 code would be preferable when we do not need to keep a global tally of a count as it remains specific to the function. It would be preferrable to count one specific task. It could also be used to count other specific tasks at a start of zero. An example being daily visits to a website being tracked with dated counters.

 Counter2 code would be ideal when we want to track the total amount counted for one thing since the counter affects one global variable. An example could be total amount of visits to a website for the month.
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
const counter3 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}

// console.log(counter1())
// console.log(counter1())
// console.log(counter1())



// console.log(counter2())
// console.log(counter2())
// console.log(counter2())

// console.log(counter1())
// console.log(counter3())

/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){

    return Math.floor(Math.random() * Math.floor(3)); // round down the total number ( random number from 0 to 1 multiplied by the rounded down 3)
   
}

// console.log(inning())



/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 
  
function finalScore(){
  let home = 0 // set home var to 0
  let away = 0 // set away var to 0
  let score = {Home: home, Away: away} // create obj called score with properties

  return function() { // return a function that calculates random score for home and away

        score.Home = score.Home + inning()
        score.Away = score.Away + inning()
        return score;
    }
  
    

}

const finscore = finalScore(); // assign var finalScore function to store final results

console.log(finscore())


// let home = 5
// let away = 0

// const score = {Home: home, Away: away}

// score.Home = inning()
// score.Away = inning()
// console.log(score)


// function annoyingSong() {
//   for (i = 99; i > 0; i--)
//       console.log(`${i} bottles of soda on the wall, ${i} ,bottles of soda, take one down pass it around, ${i -1} bottles of soda on the wall..."`);
// }

// annoyingSong()



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


function scoreboard(/* CODE HERE */) {
  /* CODE HERE */
}


