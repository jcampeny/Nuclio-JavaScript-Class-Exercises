const studentsArray = require('./exercise');

describe('Exercise 16 - Do something for each element in an array', () => {
    test('The studentsArray should have each student\'s name followed by 💖 at the end of the array', () => {
        expect(studentsArray).toEqual([
            'Luis', 'Federico', 'Clàudia', 'Mario', 'Fran', 'Veronica',
            'Luis💖', 'Federico💖', 'Clàudia💖', 'Mario💖', 'Fran💖', 'Veronica💖'
        ]);
    });

    test('The length of studentsArray should be 12 after adding the new elements', () => {
        expect(studentsArray.length).toBe(12);
    });
});
