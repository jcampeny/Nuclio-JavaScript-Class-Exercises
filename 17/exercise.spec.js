const result = require('./exercise');

describe('Exercise 17 - Modify each element in an array', () => {
    test('The result should be an array where each student\'s name has 💖 at the end', () => {
        expect(result).toEqual(['Luis💖', 'Federico💖', 'Clàudia💖', 'Mario💖', 'Fran💖', 'Veronica💖']);
    });

    test('The length of the result array should be 6', () => {
        expect(result.length).toBe(6);
    });
});
