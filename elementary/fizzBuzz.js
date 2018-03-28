function fizzBuzz(data) {
	let ans = []
	if (data % 3 == 0) {
		ans.push("Fizz")
	}
	if (data % 5 == 0) {
		ans.push("Buzz")
	}
	if (ans.length == 0) {
		ans.push(data)
	}
	return ans.join(" ")

}

console.log(fizzBuzz(15))
