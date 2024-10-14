const studentsArray = require('./exercise');

describe('Exercise 06 - Modify all array\'s elements with a for loop', () => {
    test('All elements of studentsArray should be "Elon"', () => {
        expect(studentsArray).toEqual(['Elon', 'Elon', 'Elon', 'Elon', 'Elon', 'Elon']);
    });

    test('The array should have the same number of elements', () => {
        expect(studentsArray.length).toBe(6);
    });
});
