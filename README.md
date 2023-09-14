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

### Task 1: Set up Project

Using VSCode and Command Line:

1. Fork the repo
2. Go into canvas and connect your reop to codegrade
3. Clone your forked version of the repo
4. DO NOT CREATE A BRANCH. You will be pushing your changes to the main/master today
5. cd into your repo
6. open the terminal in your vs code and type `npm install`
7. next type `npm run test` in your terminal
8. Complete your work making regular commits to main/ master your codegrade score will update each time you make a push.

### Task 2a - MVP code

Find the file `index.js` and complete all tasks.

### Testing & Debugging

Open a second terminal inside of your project by clicking on the split terminal icon
![alt text](assets/split_terminal.png "Split Terminal")

Inside of your second terminal type `npm start`
![alt text](assets/npm_start.png "type npm start")

You will be running your tests in one terminal and debugging in the other. As you work on your code you should make use of `console.log` to check your progress and debug.
![alt text](assets/tests_debug_terminal_final.png "your terminal should look like this")

### Task 2b - Written questions

Edit the `ReadMe` file with your answers to the questions below.

1. In your own words, define closure (1-2 sentences).
   A closure in JavaScript can be likened to a personal diary that not only contains its own stories (local variables) but also has clippings, notes, and bookmarks from a family album (the outer function’s variables) to which it has exclusive access, preserving a rich context of memories (the state of outer function variables) that are brought along each time the diary is read (each time the closure is invoked).

2. Study the following code, then answer the questions below.

```js
function personalDice(name) {
  return function () {
    // generate random number between 1 and 6
    const newRoll = Math.floor(Math.random() * 6);
    console.log(`${name} rolled a ${newRoll}`);
  };
}

const dansRoll = personalDice("Dan");

const zoesRoll = personalDice("Zoe");

dansRoll();
dansRoll();
```

a. Where is closure used in this code? How can you tell?
Closure is used in the anonymous function that is returned by the personalDice function. We can tell this is a closure because this anonymous function accesses the name variable, which is defined in the outer function personalDice. So even after personalDice has finished executing, the inner function still has access to the name variable due to the closure, allowing it to use the name variable each time it is called.

b. Compare and contrast calling `dansRoll` the first and second time. What is always the same? What could change?
What is always the same?
The name variable will always be "Dan" because it is captured in the closure created when personalDice("Dan") was called, preserving this piece of information for all future calls of dansRoll.

What could change?
The newRoll variable could change because a new random number is generated each time the dansRoll function is called. It generates a new random number between 0 and 5 (note that to generate a number between 1 and 6, you would need to modify the code to Math.floor(Math.random() \* 6) + 1).

c. What is the lexical scope of `newRoll`?
The lexical scope of newRoll is the anonymous function returned by personalDice. It is a local variable within that function and is not accessible outside of that function's scope. Each time the function is called, a new newRoll variable is created, a random number is assigned to it, and it is used within that particular call of the function. After the function call completes, the newRoll variable goes out of scope and is not accessible anymore.

### Task 3 - Stretch Goals

After you have completed the requirements, **create** a new file called `stretch.js` and practice more with closures. There are no tests for these problems.

See if you can complete one or more of the following challenges:

1. Write a function that would allow you to do this using a closure. (This is another interview question we've seen before - when you're ready for answers, view an explanation [here](https://www.coderbyte.com/algorithm/3-common-javascript-closure-questions)).

```js
function createBase(baseNumber) {
  return function (n) {
    return baseNumber + n;
  };
}
var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27
```

2. Research the differences between functional programming and object oriented programming. Then, describe the pros and cons of functional programming vs object-oriented programming. This is a common interview question and great practice!

Functional Programming (FP)

Pros:

Predictability: Functions in FP have no side effects, making outcomes more predictable.
Concurrency: Easier to write safe concurrent code due to immutability.
Testability: The focus on pure functions means it's generally easier to write test cases.
Bug reduction: The emphasis on immutability often leads to fewer bugs.

Cons:

Learning curve: Can be more challenging to learn, especially for beginners.
Performance: Can sometimes lead to performance issues due to the avoidance of mutable state and iterative loops.
Verbosity: FP can sometimes require more lines of code to accomplish the same task as OOP.
Object-Oriented Programming (OOP)

Pros:

Modularity: OOP offers clear modularity through the organization of code into objects.
Reuse: Encourages reuse of code through inheritance.
Popular: Many popular languages are object-oriented, making it a valuable paradigm to understand for job opportunities.
Intuitive: The object-oriented paradigm can often be more intuitive, as it encourages the organization of code in a way that models how people often think about the world (as a collection of objects with properties and behaviors).

Cons:

Complexity: Can lead to overly complex architectures.
Mutability: The state mutability in OOP can lead to bugs and difficulties in debugging code.
Inheritance issues: Inheritance can sometimes lead to messy code and unwanted relationships between objects.
Not ideal for all types of problems: While OOP can be very powerful, it is not ideal for all types of problems.

Conclusion:

Both paradigms have their place and can even be used together in a multi-paradigm approach, where you choose the best tool for the task at hand. It's also worth noting that many modern programming languages support both functional and object-oriented programming styles, allowing developers to leverage the strengths of both paradigms.

## Resources

📚 [Scope and Closures Guide](https://css-tricks.com/javascript-scope-closures/)

🧠 ["I never Understood Closures" Blog](https://medium.com/dailyjs/i-never-understood-javascript-closures-9663703368e8)

## Submission format

Please submit your project via codegrade by following [these instructions](https://bloomtech.notion.site/bloomtech/BloomTech-Git-Flow-Step-by-step-269f68ae3bf64eb689a8328715a179f9) See part 2, submitting an assignment with codegrade
