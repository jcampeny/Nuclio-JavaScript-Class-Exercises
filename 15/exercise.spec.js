const studentsArray = require('./exercise');

describe('Exercise 15 - Reverse an array', () => {
    test('The studentsArray should be reversed', () => {
        expect(studentsArray).toEqual(['Veronica', 'Fran', 'Mario', 'Clàudia', 'Federico', 'Luis']);
    });
});
