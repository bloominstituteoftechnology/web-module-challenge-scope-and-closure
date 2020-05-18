//1. Predict the output of the code below and explain why this is the output using what you learned today. When you're ready for answers, view an explanation [here](https://www.coderbyte.com/algorithm/3-common-javascript-closure-questions

    //js
    (function(){
      var a = b = 3;
    })();
    console.log("a defined? " + (typeof a !== 'undefined'));
    console.log("b defined? " + (typeof b !== 'undefined'));
    
    The output will be a defined as false because b will be defined as 3

   // 2. Write a function that would allow you to do this using a closure. (This is another interview question we've seen before - when you're ready for answers, view an explanation [here](https://www.coderbyte.com/algorithm/3-common-javascript-closure-questions)).

            //js
            function createBase(number) { 

            return function (n) {

            return number + n
            }
            }
            var addSix = createBase(6);
            addSix(10); // returns 16
            addSix(21); // returns 27
