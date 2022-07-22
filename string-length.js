function stringLength(string) {
  let strLength = string.length;
  if (strLength > 0 && strLength < 11) {
    return strLength;
  } else {
    return 'invalid string';
  }
}

module.exports = stringLength;