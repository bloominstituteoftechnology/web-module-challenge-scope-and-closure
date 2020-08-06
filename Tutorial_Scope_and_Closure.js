function flip(repeat){
    var countedHeads = 0;
    
    for (let i = 0; i < repeat; i++){
      var coinFlip = Math.round(Math.random());
      if (coinFlip === 1){
        console.log("Heads");
      }
      else{
        console.log("Tails");
      }
    
    }
    
    return(countedHeads/repeat)
    }
    
    flip(100); // <- will flip coin 100 times