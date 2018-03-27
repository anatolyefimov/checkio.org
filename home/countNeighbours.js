function countNeighbours(data, row, col) {
	let res = 0
	let colCount = data[0].length
	let rowCount = data.length
	if (col - 1 >= 0 && data[row][col -1]) {
		res += 1
	}
	if (col + 1 < colCount && data[row][col + 1]) {
		res += 1
	}
	if (row + 1 < rowCount && data[row + 1][col]) {
		res += 1
	}	
	if ( row - 1 >= 0 && data[row - 1][col ]) {
		res += 1
	}
	if (col - 1 >= 0 && row -1 >= 0 && data[row - 1][col -1]) {
		res += 1
	}
	if (col - 1 >= 0 && row + 1 < rowCount && data[row +  1][col -1]) {
		res += 1
	}
	if (col + 1 < colCount && row - 1 >= 0 && data[row -1][col + 1]) {
		res += 1
	}
	if (col + 1 < colCount && row + 1 < rowCount && data[row + 1][col + 1]) {
		res += 1
	}
	return res
}

//test

	
