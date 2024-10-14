const result = require('./exercise');

describe('Exercise 22 - Check if any element meets a certain criteria in an array', () => {
    test('The result should be true if any element is longer than 7 characters', () => {
        expect(result).toBe(true);
    });
});
