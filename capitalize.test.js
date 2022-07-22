const capitalize = require('./capitalize.js');

test ('returns the string \'welcome\' with the first character capitalized', () => {
    expect(capitalize('welcome')).toEqual('Welcome');
});