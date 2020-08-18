//stretch.js 
//### Task 3 - Stretch Goals

//After you have completed the requirements, **create** a new file called `stretch.js` and practice more with closures. There are no tests for these problems.

//See if you can complete one or more of the following challenges:
//
//1. Predict the output of the code below and explain why this is the output using what you learned today. When you're ready for answers, view an explanation [here](https://www.coderbyte.com/algorithm/3-common-javascript-closure-questions




```js
(function(){
  var a = b = 3;
})();
console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));
```

// -- The outcome of the code will be that a defined false since a is definined in the function, when b is console logged it willl come back as true becausse it is not defined in the fucntion.


////2. Write a function that would allow you to do this using a closure. (This is another interview question we've seen before - when you're ready for answers, view an explanation [here](https://www.coderbyte.com/algorithm/3-common-javascript-closure-questions)).

```js
var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27
```

function createBase(baseNum){
    return function(num){
        return baseNum + num;
    }
}

var addSix = createBase(6);
addSix(10);
addSix(21);

//3. Research the differences between functional programming and object oriented programming. Then, describe the pros and cons of functional programming vs object-oriented programming. This is a common interview question and great practice!
//


// --Functional programming is a type of programming that tries to avoid changing and mutable data. The output of a function should always be the same. This is because the output only relies on the argument of a function. Advantages of functional programming include nested functions, parallel programminging and bug-free code. As well as very clean code. 
// --Object Oriented Programming is when someone programs using objects to represent things. Objects hold data about them in attributes. Those are manipulated through functions. This is great for security things like security reasons because it is more unique. It always you to model real world scenarios in a more simple way. It is easier to think in object oriented terms because it is similar to how the object is being modeled in the real world. Object oriented programming however is not reuasable. 


//--Object Oriented : good when you have a fixed set of operations of things.
//--functional : good when you have a fixed set of things. 

