function brackets(expression) {
	let stack = []
	expression = expression.replace(/[^{}()\[\]]/g, '')
	for (let c of expression) {
		if (c === '}' && stack[stack.length -1] === '{' ||
			c === ')' && stack[stack.length -1] === '(' ||
			c === ']' && stack[stack.length -1] === '[') {
			stack.pop()
		}
		else {
			stack.push(c)
		}
	}		
	return stack.length === 0
}
console.log(brackets("((5+3)*2+1)"))
		
