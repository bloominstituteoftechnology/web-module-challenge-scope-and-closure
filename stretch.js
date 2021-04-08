//1. Write a function that would allow you to do this using a closure. (This is another interview question we've seen before - when you're ready for answers, view an explanation [here](https://www.coderbyte.com/algorithm/3-common-javascript-closure-questions)).


function createBase(addedNum){
    return function(startNum) {
      return startNum + addedNum;
    }
}

var addSix = createBase(6);
console.log(addSix(10)); // returns 16
console.log(addSix(21)); // returns 27


//2. Research the differences between functional programming and object oriented programming. Then, describe the pros and cons of functional programming vs object-oriented programming. This is a common interview question and great practice!

// A: Functional programming is when a project is organized by calling functions into functions. This would include callbacks and closures. Object oriented programming is based off of data stored in objects and uses methods. It does not use 