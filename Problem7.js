// By listing the first six prime numbers: 2,3,5,7,11, and 13, we can see that the 6th prime is 13. What is the 10001st prime number?



function isPrime(n) {
	if (n <= 1) return false
	if (n <= 3) return true
	if (n % 2 === 0 || n % 3 === 0) return false
	let i = 5
	while (i * i <= n) {
		if (n % i === 0 || n % (i + 2) === 0) return false
		i += 6
	}
	return true
}

let Prime_arr = []
let num = 10001
let i = 2 

while (Prime_arr.length < num) {
	if (isPrime(i)) {
		Prime_arr.push(i)
	}
	i++
}

console.log(Prime_arr[num - 1]);
