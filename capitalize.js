function capitalize(string) {
    const strCap = string.replace(/^\w/, (c) => c.toUpperCase());
    return strCap;
}

module.exports = capitalize;