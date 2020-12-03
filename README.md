# Scope and Closure Challenge

The module challenge is the afternoon project or assignment that students work through independently. This expands on the guided project completed earlier with the instructor.

## JavaScript Foundations

## Scope and Closures

## Objectives

- Explain function scope
- Describe what closure is, how closure is created in a program and why it is important to understand closures in JavaScript  

## Introduction

This challenge focuses on both scope and closures.

In this challenge you will be working to build a `scoreboard` (in the console) that takes randomly generated data and keeps track of a game's progress. If you're not familiar with the rules of baseball what you need to know is this: there are 9 innings and teams take turns "at-bat." Teams can only score while they are at bat. A team stops being at bat once they have gotten 3 `outs` by either striking out or through game play. You can read more about baseball rules [here](https://www.rulesofsport.com/sports/baseball.html).

A scoreboard in a major league stadium looks something like this. In fact, the scoreboard at Fenway Park in Boston is actually quite famous. 

![Fenway Scoreboard](https://storage.googleapis.com/afs-prod/media/media:e959506330fd4e5890023c93cfbaac55/800.jpeg)

There are layers upon layers of nested functions within the game of baseball. Your challenge today will be to work through tasks associated with these layers, and ultimately to produce a scoreboard that logs in the console.

## Instructions

### Task 1 - Set Up Project and Tests

1. Fork the repo
2. Clone your forked version of the repo
3. cd into your repo and create a branch with your first and last name
4. open the terminal in your vs code and type `npm install`
5. next type `npm run test:watch` in your terminal
6. Complete your work making regular commits, once you have all your tests passing and you are ready to submit your work please see canvas for instructions on how to submit

### Task 2a - MVP code

Find the file `index.js` and complete the tasks.

### Task 2b - Written questions

Edit the `ReadMe` file with your answers.

1 In your own words, define closure (1-2 sentences).
      A closure is a function having access to the parent scope, even after the parent 
      function has closed.

2.  Study the following code, then answer the questions below.

function personalDice(name){
  return function(){
      // generate random number between 1 and 6
    const newRoll = Math.floor(Math.random() * 6);
    console.log(`${name} rolled a ${newRoll}`)
  }
}
 
const dansRoll = personalDice("Dan");
 
const zoesRoll = personalDice("Zoe");
 
 
dansRoll();
dansRoll();
 
a.    Where is closure used in this code? 
      
      dansRoll and zoesRoll are both closures

  How can you tell?

      They share the same function body definition, but store different lexical environments. In dansRoll 's lexical environment, name is Dan, while in the lexical environment for zoesRoll, name is Zoe
 
b.    Compare and contrast calling dansRoll the first and second time.
      
      It will return random numbers always
 
      What is always the same?
 
      What could change?
 
c.     What is the lexical scope of newRoll? none
 
Task 3 - Stretch Goals
After you have completed the requirements, create a new file called stretch.js and practice more with closures. There are no tests for these problems.

See if you can complete one or more of the following challenges:

1     Write a function that would allow you to do this using a closure. 
      (This is another interview question we've seen before - when you're ready for answers, view an explanation here).


var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27
 
 
                                            function  createBase(x) {
                                              return function(y) {
                                                    return x + y;
                                               };
                                            }
 
                                            var addSix = createBase(6);
 
                                            console.log(addSix(10));  // 16
                                            console.log(addSix(21)); // 27

Research the differences between functional programming and object oriented programming.


        object oriented programming are good when you have a fixed set of operations on things, and as your code evolves, you primarily add new things. This can be accomplished by adding new classes which implement existing methods, and the existing classes are left alone.

          functional programming are good when you have a fixed set of things, and as your code evolves, you primarily add new operations on existing things. This can be accomplished by adding new functions which compute with existing data types, and the existing functions are left alone.

b.         Then, describe the pros and cons of functional programming vs object-oriented 
          programming. This is a common interview question and great practice!
 
With the pro it is also possible to use both the programming styles according to our own need. As we have got languages like python, java, etc that supports both object oriented concept and are also functional by supporting various inbuilt functions.



functional programming emphasizes on the use of functions where each function performs a specific task.  Fundamental elements used are variables and functions.The data in the functions are immutable(cannot be changed after creation).  Importance is not given to data but to functions.

object-oriented programming  is based on object oriented concept. Classes are used where instance of objects are created.  Fundamental elements used are objects and methods and the data used here are mutable data. 


## Resources

📚 [Scope and Closures Guide](https://css-tricks.com/javascript-scope-closures/)

🧠 ["I never Understood Closures" Blog](https://medium.com/dailyjs/i-never-understood-javascript-closures-9663703368e8)

## Submission Format

Please see Canvas for cohort specific submission instructions 
