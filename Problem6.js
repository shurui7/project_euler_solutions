let arr_sum_of_sqrs = [];
let i = 0;
let b = 1;
let sum_of_hundred = 0;

while (i < 100) {
    arr_sum_of_sqrs.push(Math.sqrt(i));
    i++
}

let sum_of_sqrs = arr_sum_of_sqrs.reduce((a, b) => a + b, 0);

while (b < 100) {
    sum_of_hundred = sum_of_hundred + b;
    b++
}

console.log(sum_of_sqrs - Math.sqrt(sum_of_hundred));

// result 591.1067107057963