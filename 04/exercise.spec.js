const result = require('./exercise');

describe('Exercise 04 - Retrieve an array\'s last element', () => {
    test('The result should be the last student in the array', () => {
        expect(result).toBe('Veronica');
    });
});
