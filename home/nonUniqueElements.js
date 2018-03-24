function nonUniqueElements(data) {
	return data.filter(a => data.indexOf(a) !== data.lastIndexOf(a))
}

//tests

console.log(nonUniqueElements([1, 2, 3, 2, 1, 2, 4, 5, 5]))
