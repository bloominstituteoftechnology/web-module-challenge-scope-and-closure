/* ⭐️ Example Challenge START ⭐️ ### Challenge `processFirstItem` @instructions Implement a higher-order function called `processFirstItem`.
It takes two arguments: @param stringList an array of strings. @param callback function that takes a string as its argument. @returns the result of invoking `callback` with the FIRST element in `stringList`. Example of usage of this higher-order function: Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`, should return 'foofoo'. */ function processFirstItem(stringList, callback) { return callback(stringList[0]) } // ⭐️ Example Challenge END ⭐️

///// M V P ///////
/* Task 1: `counterMaker` Study the code for counter1 and counter2. Answer the questions below.
1. What is the difference between counter1 and counter2?
 - counter1 is a function declared within the global scope with another function nested in it, whereas counter 2 is declared in the global scope, and is a general function.
2. Which of the two uses a closure? How can you tell?
 - Both use closure:
 - counter1 uses closure because it is a function with a function nested within. This creates a lexical environment, which happens when you declare a new "scope" with curly brackets. The counter function nested in the counterMaker function uses closure to reach outward to the counterMaker function to retrieve the current value for the count variable to increment it by one.
 - counter2 also uses closure due to the fact that the global scope itself, in which the count variable has been declared, is also a lexical environment. Resulting in the counter2 function reaching outward to retrieve the value for count in order it increase it by one.
3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 - The counter1 function would be preferable if you don't wish to have the count variable accessable by any other part of your code.
 - The counter2 function is preferable when the count variable is used anywhere else, besides just the counter2 function. In other words accessing the count variable at its current value, rather than calling the function and incrementing it by one. */

/* counter1 code */ function counterMaker() { let count = 0; return function counter() { return count++; } } const counter1 = counterMaker();
/* counter2 code */ let count = 0; function counter2() { return count++; }

/* Task 2: inning()
Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

/* Task 3: finalScore() Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object. For example, finalScore(inning, 9) might return: { "Home": 11, "Away": 5, } */ 

/* Task 4:
Create a function called `scoreboard` that accepts the following parameters:
(1) Callback function `finalScore`
(2) Callback function `inning`
(3) A number of innings
and returns the score at each pont in the game, like so: 1st inning: awayTeam - homeTeam 2nd inning: awayTeam - homeTeam 3rd inning: awayTeam - homeTeam 4th inning: awayTeam - homeTeam 5th inning: awayTeam - homeTeam 6th inning: awayTeam - homeTeam 7th inning: awayTeam - homeTeam 8th inning: awayTeam - homeTeam 9th inning: awayTeam - homeTeam Final Score: awayTeam - homeTeam */
function inning(num) {
	return inningScore = {
		"Home" :  Math.floor(Math.random() * 3),
		"Away" : Math.floor(Math.random() * 3),
	}
}

function finalScore(inning, num) {
	return finalScore = {
		"Home": finalAway,
		"Away": finalHome,
	}
}

function scoreboard(finalScore, inning, num) {
	finalAway = 0;
	finalHome = 0;
	
	for (i = 1; i < num + 1; i++){
		inning(num);
		console.log(`Inning ${i}: Away: ${inningScore.Away} - Home: ${inningScore.Home}`);
		finalAway += inningScore.Away;
		finalHome += inningScore.Home;
	}
	finalScore(inning, num);
	console.log(`Final Score: Away: ${finalScore.finalAway} Home:  ${finalScore.finalHome}`);
} // scoreBoard end