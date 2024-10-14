const studentsArray = require('./exercise');

describe('Exercise 09 - Remove an element at the beginning of an array', () => {
    test('The first element of studentsArray should not be "Elon"', () => {
        expect(studentsArray[0]).not.toBe('Elon');
    });

    test('The array should have 6 elements after removal', () => {
        expect(studentsArray.length).toBe(6);
    });

    test('The array should be in the correct order after removal', () => {
        expect(studentsArray).toEqual(['Luis', 'Federico', 'Clàudia', 'Mario', 'Fran', 'Veronica']);
    });
});
