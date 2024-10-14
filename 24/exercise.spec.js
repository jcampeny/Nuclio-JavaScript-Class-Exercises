const result = require('./exercise');

describe('Exercise 24 - Create an object II', () => {
    test('The result should be an object with properties "name" and "role"', () => {
        expect(result).toEqual({name: 'Federico', role: 'full stack'});
    });
});
