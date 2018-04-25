function powerSupply(network, power_plants) {
	let g = {}
	for (let e of network) {
		if (g[e[0]]) 
			g[e[0]].push(e[1])
		else
			g[e[0]] = [e[1]]
		if (g[e[1]])
			g[e[1]].push(e[0])
		else
			g[e[1]] = [e[0]]
	}
	let used = {}
	function dfs(v, deep, max_deep) {
		if (deep > max_deep)
			return
		used[v] = true
		for (let u of g[v])
			dfs(u, deep + 1, max_deep)
	}
	for (let v in power_plants)
		dfs(v, 0, power_plants[v])
	let ans = []
	for (let e of network) {
		if (!power_plants[e[0]] && !used[e[0]])
			ans.push(e[0])
		if (!power_plants[e[1]] && !used[e[1]])
			ans.push(e[1])
	}
	return ans
}

var assert = require('assert')

describe("powerSimply", function() {
	it ("test #1", function() {
		
		powerSupply([['p1', 'c1'], ['c1', 'c2']], {'p1': 1}).sort(),
		        ['c2']
	})
})
