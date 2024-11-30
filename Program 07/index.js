// 7. Find the factorial of given number?

// 1*2*3*4*5 = 120

function factorial(n) {
    let fact = 1;

    for (let i = 1; i <= n; i++) {
        fact = fact * i;
    }
    return fact;
}

console.log("Factorial is: ", factorial(5));