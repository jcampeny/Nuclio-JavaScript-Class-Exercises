const result = require('./exercise');

describe('Exercise 23 - Create an object I', () => {
    test('The result should be an object with a property "name" and value "Luis"', () => {
        expect(result).toEqual({name: 'Luis'});
    });
});
