const capitalize = require('../src/capitalize');
describe('capitalize', () => {
    test('horse first letter capitalized as "Horse"', () => {
        expect(capitalize('horse')).toBe('Horse');
    })
})