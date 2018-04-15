function hammingDistance(n, m) {
	let a= n ^ m
	let res = 0
	while (a) {
		res += a % 2
		a = Math.floor(a /2)
	}
	return res
}

console.log(hammingDistance(3, 2))
