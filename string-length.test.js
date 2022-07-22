const stringLength = require('./string-length.js');

test ('the string \'123 Evergreen st\' is an invalid string', () => {
    expect(stringLength('123 Evergreen st')).toEqual('invalid string');
});

test ('the string \'welcome\' has 7 characters', () => {
    expect(stringLength('welcome')).toBe(7);
});