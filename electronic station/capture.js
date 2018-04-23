function capture(g) {
	let time = 0
	let q = []
	q.push(0);
	let used = new Array(11)
	for (let i = 0; i < 11; ++i) {
		used[i] = false
	}
	used[0] = true
	while (q.length > 0) {
		let len = q.length
		let flag = false
		for (let i = 0; i < len;  ++i) {
			if (g[q[i]][q[i]] >= 1) {
				flag = true
				--g[q[i]][q[i]];
			}
		}
		if (flag)
			++time
		console.log(time)
		console.log(q)
		for (let i = 0; i < q.length; ++i){
			if (g[q[i]][q[i]]<= 0) {
				for (let j = 0; j < g[0].length; ++j)
					if (!used[j] && g[q[i]][j]) {
						q.push(j)
						used[j] = true
					}
				q.splice(i, 1)
				--i
			}
		}
	}
	return time	
}
console.log(capture([[0, 1, 0, 1, 0, 1],
	                      [1, 1, 1, 0, 0, 0],
	                      [0, 1, 2, 0, 0, 1],
	                      [1, 0, 0, 1, 1, 0],
	                      [0, 0, 0, 1, 3, 1],
	                      [1, 0, 1, 0, 1, 2]])
)
