// Write a function that takes a number (a) as argument
// Split a into its individual digits and return them in an array
// Tip: you might want to change the type of the number for the splitting

function myFunction(a) {
  // const arr = String(a).split("");
  // const newArr = [];
  // for (let i = 0; i < arr.length; i++) {
  //   newArr.push(Number(arr[i]));
  // }
  // return newArr;

  const string = a + "";
  const strings = string.split("");
  return strings.map((digit) => Number(digit));
}

let result = myFunction(931);
console.log(result);

/*
myFunction(10)
Expected
[1,0]

myFunction(931)
Expected
[9,3,1]

myFunction(193278)
Expected
[1,9,3,2,7,8]
*/
