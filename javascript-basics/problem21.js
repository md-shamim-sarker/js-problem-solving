// Write a function that takes two numbers, say x and y, as arguments
// Check if x is divisible by y
// If yes, return x
// If not, return the next higher natural number that is divisible by y

function myFunction(x, y) {
    // if (x % y == 0) {
    //     return x;
    // } else if (y < 0) {
    //     return 0;
    // } else {
    //     return Math.floor(x / y) * y + y;
    // }

    while (x % y !== 0) x++;
    return x;
}

let result = myFunction(7, 3);
console.log(result);

/*
myFunction(1, 23)
Expected
23

myFunction(23, 23)
Expected
23

myFunction(7, 3)
Expected
9

myFunction(-5, 7)
Expected
0
*/
