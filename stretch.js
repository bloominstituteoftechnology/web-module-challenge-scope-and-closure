// ```js
// var addSix = createBase(6);
// addSix(10); // returns 16
// addSix(21); // returns 27
// ```

// var addSix = creatBase(6)

function addSix(Six)
{
    let ten = 10 + Six;
    let twentyOne = 21 + Six;
    return `${ten} && ${twentyOne}`;

}
console.log(addSix(6));