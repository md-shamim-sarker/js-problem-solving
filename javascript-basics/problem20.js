// This challenge is a little bit more complex
// Write a function that takes a number (a) as argument
// If a is prime, return a
// If not, return the next higher prime number

function myFunction(a) {
    // for (let i = 2; i < a; i++) {
    //     if (a % i === 0) {
    //         return myFunction(a + 1);
    //     }
    // }
    // return a;

    function isPrime(num) {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return num > 1;
    }
    let n = a;
    while (!isPrime(n)) n++;
    return n;
}

console.log(myFunction(38));

/*
myFunction(38)
Expected
41

myFunction(7)
Expected
7

myFunction(115)
Expected
127

myFunction(2000)
Expected
2003
*/
