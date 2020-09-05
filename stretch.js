// ### Task 3 - Stretch Goals

// After you have completed the requirements, **create** a new file called `stretch.js` and practice more with closures. There are no tests for these problems.

// See if you can complete one or more of the following challenges:

// 1. Predict the output of the code below and explain why this is the output using what you learned today. When you're ready for answers, view an explanation [here](https://www.coderbyte.com/algorithm/3-common-javascript-closure-questions

// ```js
// (function(){
//   var a = b = 3;
// })();
// console.log("a defined? " + (typeof a !== 'undefined')); //false
// console.log("b defined? " + (typeof b !== 'undefined')); //true
// ```

// 2. Write a function that would allow you to do this using a closure. (This is another interview question we've seen before - when you're ready for answers, view an explanation [here](https://www.coderbyte.com/algorithm/3-common-javascript-closure-questions)).

// ```js
// var addSix = createBase(6);
// addSix(10); // returns 16
// addSix(21); // returns 27

function createBase(num) {
  base = num;
  return function plusSix() {
    return num + 6;
  };
}

const ten = createBase(10);
const twentyOne = createBase(21);

console.log(ten());
console.log(twentyOne());

// 3. Research the differences between functional programming and object oriented programming. Then, describe the pros and cons of functional programming vs object-oriented programming. This is a common interview question and great practice!

// functional programming is useful for completing a wide variety of operations on data that is fixed. With functional programming data can not be stored in objects. Object oriented programming on the other hand is all about storing and manipulating data inside of objects. Functional programming utilizes immutable dta whereas OOP utilizes mutable data. In functional programming, statements can be evaluated in any order whereas in OOP, statements have to be excecuted in a particular order
