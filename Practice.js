
//Scope and Return
function flip(repeat){
    var countedHeads = 0;
    
    for (let i = 0; i < repeat; i++){
      var coinFlip = Math.round(Math.random());
      if (coinFlip === 1){
        console.log("Heads");
        countedHeads = countedHeads +1;
      }
      else{
        console.log("Tails");
      }
    
    }
    
    return(countedHeads/repeat)
    }

    console.log(flip(100))
    

// Scope and Return 



// Closures 

//Example 1

const foo = 'bar';
function returnFoo(){
    return foo;
}

returnFoo();

//Example 2

const lastName = 'Bond';
function greet() {
    const firstName = 'James';
    alert(`The Name's ${lastName}, ${firstName} ${lastName}`);

}

console.log(greet(lastName));

// Codepen Examples

const counter = () => {

    let count = 0;
    return function(){
        count = count +1;

        return count;
    } 

}