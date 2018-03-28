function firstWord(a, b) {
    let start = a.search(/[a-zA-Z]/)
    let res = ''
    while (a.charAt(start).match(/[a-zA-Z']/)) {
        res += a[start]
        start += 1
    }
    return res
}

console.log(firstWord("don't touch it"))
