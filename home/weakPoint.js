function weakPoint(data) {
	let rowCount = data.length
	let colCount = data[0].length
	let sumRow = []
	let sumCol = []
	for (let i = 0; i< rowCount; ++i) {
		let sum = 0
		for (let j = 0; j < colCount; ++j) {
			sum += data[i][j]
		}
		sumRow.push(sum)
	}
	for (let j = 0; j < colCount; ++j) {
		let sum = 0
		for (let i = 0; i < rowCount; ++i) {
			sum += data[i][j]
		}
		sumCol.push(sum)
	}
	let col = -1
	let row = -1
	for (let i = 0; i < rowCount; ++i) {
		if (row == -1 || sumRow[row] > sumRow[i]) {
			row = i
		}
	}
	for (let j = 0; j < colCount; ++j) {
		if (col == -1 || sumCol[col] > sumCol[j]) {
			col = j
		}
	}
	return [row, col]
}
 

