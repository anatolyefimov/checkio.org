function mostFrequent(data) {
	let count = {}
	for (let word of data) {
		if (count[word]) {
			count[word]++
		}
		else {
			count[word] = 1
		}
	}
	let ans = ''
	let cnt = 0
	for (let word in count) {
		if (count[word] > cnt) {
			ans = word
			cnt = count[word]
		}
	}
	return ans
}

console.log(mostFrequent(['a', 'a', 'a', 'b', 'b']))

