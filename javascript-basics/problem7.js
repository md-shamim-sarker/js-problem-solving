// Write a function that takes a string (a) as argument
// Get the first 3 characters of a
// Return the result
function myFunction(a) {
  // return a.substr(0, 3);
  // return a.slice(0, 3);
  return a.substring(0, 3);
}

let result = myFunction("abcdefghij");
console.log(result); // abc
