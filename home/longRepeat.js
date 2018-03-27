function longRepeat(line) {
    let ans = 1
    let cur = 1
    if (line == "") {
        return 0
    }
    for (let i = 0; i < line.length -1; ++i) {
        if (line[i] == line[i + 1]) {
            ++cur
        }
        if (line[i] != line[i + 1] || i == line.length - 2) {
            ans = Math.max(ans, cur)
            cur = 1
        }
    }
    return ans
}

console.log(longRepeat("sdsssfffffffss"))