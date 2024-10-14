const result = require('./exercise');

describe('Exercise 21 - Check if all elements meet a certain criteria in an array', () => {
    test('The result should be true if all elements are longer than 3 characters', () => {
        expect(result).toBe(true);
    });
});
