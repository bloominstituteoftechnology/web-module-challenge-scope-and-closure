// Write a function that would allow you to do this using a closure. (This is another interview question we've seen before - when you're ready for answers, view an explanation here).

function createBase(num){
    return function addsNumber(a){
        return num+a;
    }
}

var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27