function countingTiles(radius) {
	let solid = 0, partial = 0;
	let d = [[0, 1], [1, 0], [1, 1], [0, 0]]
	for (let i = -5; i <= 5; ++i) {
		for (let j = -5; j <= 5; ++j) {
			let count = 0
			for (let a of d) {
				if ((i + a[0])*(i + a[0]) + (j + a[1])* (j + a[1]) < radius*radius) {
					++count
				}
			}
			if (count === 4) {
				++solid
			}
			else if (count != 0) {
				++partial
			}
		}
	}
	return [solid, partial]
}

console.log(countingTiles(1))
					
