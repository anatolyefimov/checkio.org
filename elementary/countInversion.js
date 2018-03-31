function countInversion(sequence) {
	let ans = 0
	for (let i = 0; i < sequence.length; ++i) {
		for (let j = 0; j < i; ++j) {
			if (sequence[j] >  sequence[i]) {
				++ans
			}
		}
	}
	return ans
} 

console.log(countInversion([1, 2, 5, 3, 4, 7, 6]))

