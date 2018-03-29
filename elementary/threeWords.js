function threeWords(data) {
	let ans = false
	data = data.split(" ")
	let len = 0
	for (let a of data) {
		if (a.search(/\d/) == -1) {
			len += 1
		}
		else
			len = 0
		if (len == 3)
			ans = true
	}
	return ans
}

console.log(threeWords("Hello world hello"))	
