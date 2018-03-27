function mostWanted(data) {
	let count = {}
	data = data.toLowerCase()
	for (let c of data) {
		if (count[c] != undefined && (c.match(/[a-z]/i))) {
				count[c] += 1
		}
		else {
			if (c.match(/[a-z]/i))
				count[c] = 1
		}
	}
	let ans 
	for (let c in count) {
		if(!ans || count[c] > count[ans] || count[c] == count[ans] && c < ans) {
			ans = c
		}
	}
	return ans
}

console.log(mostWanted("Hello Worls!!!"))
