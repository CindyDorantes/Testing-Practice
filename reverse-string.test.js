const reverseString = require('./reverse-string');

test('requiem string to equal meiuqer', () => {
    expect(reverseString('requiem')).toEqual('meiuqer');
});
