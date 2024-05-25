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