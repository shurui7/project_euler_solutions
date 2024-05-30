let results_of_sqrs = []
let i = 1
let sum = BigInt(0)

while (i < 1000) {
	let result = BigInt(i) ** BigInt(i)
	results_of_sqrs.push(result)
	i++
}

sum = results_of_sqrs.reduce((a, b) => a + b, BigInt(0))

let last_10_digits = sum.toString().slice(-10)

console.log(last_10_digits)

// result = 9110846700