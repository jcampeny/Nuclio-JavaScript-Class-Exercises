const studentsArray = require('./exercise');

describe('Exercise 05 - Modify an array\'s element', () => {
    test('The second element of studentsArray should be "Elon"', () => {
        expect(studentsArray[1]).toBe('Elon');
    });

    test('The array should have the same number of elements', () => {
        expect(studentsArray.length).toBe(6);
    });

    test('The array should be in the correct order after modification', () => {
        expect(studentsArray).toEqual(['Luis', 'Elon', 'Clàudia', 'Mario', 'Fran', 'Veronica']);
    });
});
