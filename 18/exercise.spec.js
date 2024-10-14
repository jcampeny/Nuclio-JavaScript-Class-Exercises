const result = require('./exercise');

describe('Exercise 18 - Filter elements in an array', () => {
    test('The result should contain only the names that are 5 characters long or less', () => {
        expect(result).toEqual(['Luis', 'Mario', 'Fran']);
    });

    test('The length of the result array should be 3', () => {
        expect(result.length).toBe(3);
    });
});
