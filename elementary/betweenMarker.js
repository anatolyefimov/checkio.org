function betweenMarkers(text, begin, end) {
	let s = text.indexOf(begin) == -1 ? 0 : text.indexOf(begin) + begin.length
	let e = text.indexOf(end) == -1 ? text.length : text.indexOf(end)
	if (s > e)
		return ""
	return text.substring(s, e)
}

//tests

console.log(betweenMarkers("<head><title>My new site</title></head>",  "<title>", "</title>"))
console.log(betweenMarkers('No[/b] hi', '[b]', '[/b]'))
console.log(betweenMarkers('No <hi>', '>', '<'))
