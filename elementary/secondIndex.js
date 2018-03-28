function secondIndex(text, symbol) {
    return text.indexOf(symbol, text.indexOf(symbol) + 1) == -1 ? undefined : text.indexOf(symbol, text.indexOf(symbol) + 1)
}

console.log(secondIndex("sims", "s"))