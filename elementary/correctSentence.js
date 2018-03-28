function correctSentence(text) {
    let c = text[0].toUpperCase()
    text = c + text.substr(1)
    if (text[text.length - 1] != '.') {
        text += '.'
    }
    return text;
}

console.log(correctSentence("greetings, friend"))