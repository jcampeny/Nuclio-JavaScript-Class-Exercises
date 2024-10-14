const studentsArray = require('./exercise');

describe('Exercise 12 - Remove and add elements at any position in an array', () => {
    test('The second element should be replaced with "Elon" and "Jeff"', () => {
        expect(studentsArray).toEqual(['Luis', 'Elon', 'Jeff', 'Clàudia', 'Mario', 'Fran', 'Veronica']);
    });

    test('The array should have 7 elements after modification', () => {
        expect(studentsArray.length).toBe(7);
    });
});
