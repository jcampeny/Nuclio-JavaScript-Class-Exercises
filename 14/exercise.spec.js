const studentsArray = require('./exercise');

describe('Exercise 14 - Sort an array alphabetically', () => {
    test('The studentsArray should be sorted alphabetically', () => {
        expect(studentsArray).toEqual(['Clàudia', 'Federico', 'Fran', 'Luis', 'Mario', 'Veronica']);
    });
});
