function reverseString(string) {
    const strReversed = string.split('').reverse().join('');
    return strReversed;
}

module.exports = reverseString;