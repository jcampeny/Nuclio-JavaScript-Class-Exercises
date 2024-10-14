const result = require('./exercise');

describe('Exercise 01 - Create an array', () => {
    test('The array should contain 6 students\' names', () => {
        expect(result.length).toBe(6);
    });

    test('The names should be in the correct order', () => {
        expect(result).toEqual(['Luis', 'Federico', 'Clàudia', 'Mario', 'Fran', 'Veronica']);
    });
});
