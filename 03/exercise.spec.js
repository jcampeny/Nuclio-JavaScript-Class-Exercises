const result = require('./exercise');

describe('Exercise 03 - Retrieve an array\'s element', () => {
    test('The result should be the second student in the array', () => {
        expect(result).toBe('Federico');
    });
});
