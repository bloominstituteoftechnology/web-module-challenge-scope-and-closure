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
 * counter2 has let count outside the function and counters1 - inside.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * counter2 has. Because it's use the variable from outside.
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * 
 * counter2 is usually prefered because can use outside data for running the function.
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

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){
  
  return Math.floor(Math.random()*3);
  }
console.log(inning());

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(inning, i){


let home = 0;
let away=0;
  for(let n = 0; n <i; n++){
    home+=inning();
    away+=inning();
  }

  return `"Home": ${home},\n"Away": ${away},`;
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

function scoreboard(inning, i){

  let home = 0;
  let away=0;
  let string="";

    for(let n = 1; n <=i; n++){
      
      home+=inning();
      away+=inning();

      if (n == 1) 
      string+=`${n}st inning: ${home} - ${away}\n`;
      else
      if (n == 2) 
      string+=`${n}nd inning: ${home} - ${away}\n`;
      else
      if (n == 3) 
      string+=`${n}rd inning: ${home} - ${away}\n`;
      else

      string+=`${n}th inning: ${home} - ${away}\n`;

}
string+=`\nFinal Score: ${home} - ${away}`;
return string;

}
console.log(scoreboard(inning, 9));


