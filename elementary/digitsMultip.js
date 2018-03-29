function digitsMultip(data) {
	let res = 1
	while (data) {
		let digit = data % 10
		if (digit)
			res *= digit
		data = Math.floor(data/10)
	}
	return res
}


