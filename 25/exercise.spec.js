const result = require('./exercise');

describe('Exercise 25 - Create an object III', () => {
    test('The result should be an object with the specified properties', () => {
        expect(result).toEqual({
            name: 'Clàudia',
            role: 'full stack',
            hobbies: ['music', 'programming'],
            favoriteFoodByCountry: {
                Italy: ['Pizza🍕', 'Pasta🍝'],
                Japan: ['Sushi🍣']
            }
        });
    });
});
