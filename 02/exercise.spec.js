const result = require('./exercise');

describe('Exercise 02 - Get array\'s length', () => {
    test('The result should be a number', () => {
        expect(typeof result).toBe('number');
    });

    test('The length of studentsArray should be 6', () => {
        expect(result).toBe(6);
    });
});
