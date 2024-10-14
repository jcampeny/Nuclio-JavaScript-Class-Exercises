const franData = require('./exercise');

describe('Exercise 27 - Accessing object data II', () => {
    test('The Italy array should contain "Spaghetti🍝" instead of "Pasta🍝"', () => {
        expect(franData.favoriteFoodByCountry.Italy).toEqual(['Pizza🍕', 'Spaghetti🍝']);
    });
});
