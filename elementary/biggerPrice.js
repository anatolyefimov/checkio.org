function biggerPrice(limit, data) {
	data.sort(function(a, b) {
		if (a['price'] < b['price']) {
			return 1
		}
		else {
			return -1
		}
	})
	let ans = []
	for (let i = 0; i < limit; ++i) {
		ans.push(data[i])
	}
	return ans
}
	
	
