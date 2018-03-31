function numberRadix(str_number, radix) {
	let map = {}
	for (let i = 0; i < 10; ++i) {
		map[i.toString()] = i
	}
	for (let i = "A".charCodeAt(0); i <= "Z".charCodeAt(0); ++i) {
		map[String.fromCharCode(i)] = i - "A".charCodeAt(0) + 10
	}
	let ans = 0
	for (let i = 0; i < str_number.length; ++i) {
		if (map[str_number[i]] >= radix)
			return -1
		ans += Math.pow(radix, str_number.length - 1 - i)*map[str_number[i]]
	}
	return ans
}

console.log(numberRadix("AF", 16))
		
