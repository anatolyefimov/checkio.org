function median(data) {
	data.sort(compare)
	if (data.length % 2 == 1) {
			return data[Math.floor(data.length / 2)]
	}
	else {
		return (data[Math.floor(data.length/2)] + data[Math.floor(data.length/2 -1)]) /2
	}
}

function compare(a, b) {
	if (a > b) 
		return 1
	else 
		return -1
}

//test

console.log(median([1, 2, 3, 4, 5]))
console.log(median([2, 1, 4, 3, 5]))
console.log([5, 4, 3, 2, 1].sort(compare))
