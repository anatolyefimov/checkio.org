function mostNumbers() {
	if (arguments.length == 0)
		return 0
	return (Math.max.apply(null, arguments) - Math.min.apply(null,arguments)) 
}

console.log(Infinity - Infinity)

