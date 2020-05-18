## Task 2b - Written questions

Edit the `ReadMe` file with your answers.

1. In your own words, define closure (1-2 sentences).

---Closure is the keys for development to manipulate functions: parent function level which already terminated can acess to its child. 

2. Study the following code, then answer the questions below.

```js
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
```

a. Where is closure used in this code? How can you tell?

----Closure : 
const dansRoll = personalDice("Dan");
const zoesRoll = personalDice("Zoe");

dansRoll();
dansRoll();
```

b. Compare and contrast calling `dansRoll` the first and second time. What is always the same? What could change?

---Its gonna show up different numbers. The name will always be the same and the number will change

c. What is the lexical scope of `newRoll`? 

---Math.floor(Math.random() * 6);
