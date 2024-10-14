const studentsArray = require('./exercise');

describe('Exercise 08 - Remove an element at the end of an array', () => {
    test('The last element of studentsArray should not be "Elon"', () => {
        expect(studentsArray).not.toContain('Elon');
    });

    test('The array should have 6 elements after removal', () => {
        expect(studentsArray.length).toBe(6);
    });

    test('The array should be in the correct order after removal', () => {
        expect(studentsArray).toEqual(['Luis', 'Federico', 'Clàudia', 'Mario', 'Fran', 'Veronica']);
    });
});
