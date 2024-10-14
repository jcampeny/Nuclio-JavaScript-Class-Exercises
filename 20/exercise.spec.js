const result = require('./exercise');

describe('Exercise 20 - Find an element based on certain criteria in an array', () => {
    test('The result should be the first element that is 5 characters long (which is "Mario")', () => {
        expect(result).toBe('Mario');
    });
});
