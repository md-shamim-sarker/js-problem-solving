// Write a function that takes two strings (a and b) as arguments
// Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
// Return the resulting string

function myFunction(a, b) {
    // let result = "";
    // let index = 0;
    // for (let i = a.length - 1; i > -1; i--) {
    //     index++;
    //     result = a[i] + result;
    //     if (index % 3 === 0) {
    //         result = b + result;
    //     }
    // }
    // return result;

    let result = [];
    let rest = a;
    while (rest.length) {
        result.push(rest.slice(-3));
        rest = rest.slice(0, -3);
    }
    return result.reverse().join(b);
}

console.log(myFunction("1234567", "."));

/*
myFunction('1234567','.')
Expected
'1.234.567'

myFunction('abcde','$')
Expected
'ab$cde'

myFunction('zxyzxyzxyzxyzxyz','w')
Expected
'zwxyzwxyzwxyzwxyzwxyz'
*/
