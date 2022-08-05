// Write a function that takes a string (a) and a number (n) as argument
// Return the nth character of 'a'

function myFunction(a, n) {
    // return a.charAt(n - 1);
    return a[n - 1];
}

let result = myFunction('abcd', 1);
console.log(result); // a