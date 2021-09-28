/*
  Author: Mia Alcaraz & Raven Jackson
  Created: 09.26.2021
*/


function isEven(x) {
  return (x % 2 == 0);
}

//create an array
array = [7, 17, 70, 71, 700]

// test function
console.log("Is 1 even? ", isEven(1));
console.log("Is 2 even?" , isEven(2));

var result = array.map(isEven);
// should return [false, false, true, false, true]
console.log("Test of evenness of array:", result);

var result = array.map(function(x){
  return x ** 0.5;
})
// should return [2.6457513110645907, 4.123105625617661, 8.366600265340756, 8.426149773176359, 26.457513110645905]
console.log("Squareroot of array:", result);
