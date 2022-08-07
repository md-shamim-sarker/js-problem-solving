{
    function primeFunction(a, b) {
        for (let i = a; i <= b; i++) {
            let flag = 0;
            for (let j = 2; j < i; j++) {
                if (i % j == 0) {
                    flag = 1;
                    break;
                }
            }
            if (i > 1 && flag == 0) {
                console.log(i);
            }
        }
    }

    // primeFunction(1, 10);
}

{
    function isPrime(a) {
        let flag = 0;
        for (let i = 2; i < a; i++) {
            if (a % i == 0) {
                console.log(i);
                flag = 1;
                break;
            }
        }
        if (flag == 0) {
            console.log("Prime");
        } else {
            console.log("Not Prime");
        }
    }
    isPrime(5);
}
