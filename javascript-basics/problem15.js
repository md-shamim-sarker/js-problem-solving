// Write a function that takes a number (a) as argument
// If a is a whole number (has no decimal place), return true
// Otherwise, return false

function myFunction(a) {
  //   return Math.round(a) === a;
  return a - Math.floor(a) === 0; // false
}

let result = myFunction(15.6);
console.log(result);
