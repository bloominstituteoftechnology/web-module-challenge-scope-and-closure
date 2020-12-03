function createBase(base) {
    
    return function (num) {
        return num + base;
    }
}

var addSix = createBase(6);
console.log(addSix(10));