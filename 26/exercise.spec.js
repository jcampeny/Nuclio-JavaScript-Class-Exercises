const marioData = require('./exercise');

describe('Exercise 26 - Accessing object data I', () => {
    test('The role property should be updated to "full stack developer"', () => {
        expect(marioData.role).toBe('full stack developer');
    });
});
