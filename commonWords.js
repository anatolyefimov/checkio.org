function commonWords(first, second) {
	let a = new Set()
	let b = new Set()
	first = first.split(',')
	second = second.split(',')
	for (let word of first)
		a.add(word)
	for (let word of second) 
		b.add(word)
	let ans = []
	for (let word of a) {
		if (b.has(word)) {
			ans.push(word)
		}
	}
	ans.sort()
	return ans.join(",")
}

console.log(commonWords("hello,world", "hello,earth"))


