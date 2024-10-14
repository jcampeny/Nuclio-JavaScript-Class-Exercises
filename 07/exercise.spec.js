const studentsArray = require('./exercise');

describe('Exercise 07 - Add an element at the end of an array', () => {
    test('The last element of studentsArray should be "Elon"', () => {
        expect(studentsArray[studentsArray.length - 1]).toBe('Elon');
    });

    test('The array should have 7 elements', () => {
        expect(studentsArray.length).toBe(7);
    });

    test('The array should be in the correct order', () => {
        expect(studentsArray).toEqual(['Luis', 'Federico', 'Clàudia', 'Mario', 'Fran', 'Veronica', 'Elon']);
    });
});
