// The sum of the squares of the first ten natural numbers is, 385
// The square of the sum of the first ten natural numbers is, 3025
// Hence the difference between the sum of the squares of the first
// ten natural numbers and the square of the sum is 2640.
//
// Find the difference between the sum of the squares of the first
// one hundred natural numbers and the square of the sum.


// Variables
let arr_sum_of_sqrs = []
let i = 0
let b = 1
let sum_of_hundred = 0

// Create an array with 100 squares 
while (i < 100) {
	arr_sum_of_sqrs.push(Math.sqrt(i))
	i++
}
// Sum them
let sum_of_sqrs = arr_sum_of_sqrs.reduce((a, b) => a + b, 0)
// Sum 100 natural numbers
while (b < 100) {
	sum_of_hundred = sum_of_hundred + b
	b++
}
// Display the result = (Sum of the squares - the square of 100 natural numbers)
console.log(sum_of_sqrs - Math.sqrt(sum_of_hundred))

// result 591.1067107057963
