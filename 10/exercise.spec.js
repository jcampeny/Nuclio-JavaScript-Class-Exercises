const studentsArray = require('./exercise');

describe('Exercise 10 - Add an element at the beginning of an array', () => {
    test('The first element of studentsArray should be "Elon"', () => {
        expect(studentsArray[0]).toBe('Elon');
    });

    test('The array should have 7 elements after addition', () => {
        expect(studentsArray.length).toBe(7);
    });

    test('The array should be in the correct order after addition', () => {
        expect(studentsArray).toEqual(['Elon', 'Luis', 'Federico', 'Clàudia', 'Mario', 'Fran', 'Veronica']);
    });
});
