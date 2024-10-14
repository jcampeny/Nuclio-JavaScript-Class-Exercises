const result = require('./exercise');

describe('Exercise 13 - Concatenate two arrays', () => {
    test('The result should be a single array with students and teachers combined', () => {
        expect(result).toEqual(['Luis', 'Federico', 'Clàudia', 'Mario', 'Fran', 'Veronica', 'Alfonso', 'Eudald', 'Facundo', 'Guillermo', 'Angel']);
    });

    test('The array should have 11 elements', () => {
        expect(result.length).toBe(11);
    });
});
