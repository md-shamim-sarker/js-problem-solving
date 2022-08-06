// Write a function that takes two strings (a and b) as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation

function myFunction(a, b) {
  // let isAvailable = a.includes(b);
  // console.log(isAvailable);
  // if (isAvailable == true) {
  //   return b + a;
  // } else {
  //   return a + b;
  // }

  return a.indexOf(b) === -1 ? a + b : b + a;
}

let result = myFunction(" think, therefore I am", "I");
console.log(result); // 'cheesecake'

/*
myFunction('cheese', 'cake')
Expected
'cheesecake'

myFunction('lips', 's')
Expected
'slips'

myFunction('Java', 'script')
Expected
'Javascript'

myFunction(' think, therefore I am', 'I')
Expected
'I think, therefore I am'
*/
