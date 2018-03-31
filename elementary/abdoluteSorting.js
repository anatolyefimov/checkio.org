function absoluteSorting(numbers) {
	function compare(a, b) {
		if (Math.abs(a) > Math.abs(b)) {
			return 1
		}
		else {
			return -1
		}
	}
	numbers.sort(compare)
	return numbers
}

console.log(absoluteSorting([3, 2, 1]))

