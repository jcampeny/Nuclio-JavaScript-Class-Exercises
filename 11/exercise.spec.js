const result = require('./exercise');

describe('Exercise 11 - Join all the elements of an array', () => {
    test('The result should be a string', () => {
        expect(typeof result).toBe('string');
    });

    test('The result should contain all the student names joined with 💖 between each name', () => {
        expect(result).toBe('Luis💖Federico💖Clàudia💖Mario💖Fran💖Veronica');
    });
});
