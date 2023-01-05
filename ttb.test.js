const ttb = require('./ttb')

test('given the letter `a` returns an array of 6 booleans representing an `a`', () => {
    expect(ttb.convert('a')).toStrictEqual([true,false,false,false,false,false]);
});