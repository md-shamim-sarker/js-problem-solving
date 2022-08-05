// Write a function that takes two numbers (a and b) as arguments
// If a is smaller than b, divide a by b
// Otherwise, multiply both numbers
// Return the resulting value

function myFunction(a, b) {
  //   if (a < b) {
  //     return a / b;
  //   }
  //   return a * b;

  return a < b ? a / b : a * b;
}

let result = myFunction(24, 12);
console.log(result); // 288
