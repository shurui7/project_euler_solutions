// Multiples of 3 or 5
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6, and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.


let NumbersBellow1000 = Array.from(Array(1001).keys());
let i = 0;
var dividends = [];

while (i < 1000) {
    if (NumbersBellow1000[i] % 3 === 0 || NumbersBellow1000[i] % 5 === 0) {
        dividends.push(NumbersBellow1000[i]);
    }
    i++;
}

console.log(dividends.reduce((a, b) => a + b, 0));

// result = 233168