function romanNumerals(number) {
    let dig = []
    dig[0] = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX']
    dig[1] = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC']
    dig[2] = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM']
    dig[3] = ['', 'M', 'MM', 'MMM']
    let k = 0
    let ans = ''
    while (number) {
        ans = dig[k][number % 10] + ans
        ++k
    }
    return ans
}
console.log(romanNumerals(3888))