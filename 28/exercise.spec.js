const veronicaData = require('./exercise');

describe('Exercise 28 - Adding properties to objects', () => {
    test('veronicaData should have a new property "smart" with the value true', () => {
        expect(veronicaData.smart).toBe(true);
    });
});
