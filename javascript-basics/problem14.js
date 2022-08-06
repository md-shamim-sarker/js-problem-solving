// Write a function that takes two strings (a and b) as arguments
// Return the number of times a occurs in b

function myFunction(a, b) {
  // const arr = b.split("");
  // let n = 0;
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] == a) {
  //     n += 1;
  //   }
  // }
  // return n;

  return b.split(a).length - 1;
}

let result = myFunction(
  "h",
  "how many times does the character occur in this sentence?"
);
console.log(result);

/*
myFunction('m', 'how many times does the character occur in this sentence?')
Expected
2

myFunction('h', 'how many times does the character occur in this sentence?')
Expected
4

myFunction('?', 'how many times does the character occur in this sentence?')
Expected
1

myFunction('z', 'how many times does the character occur in this sentence?')
Expected
0
*/
