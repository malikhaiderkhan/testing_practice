const reversestr = require('../src/reversestr');
describe('reversestr', () => {
    test('string reverse of "horse" is "esroh"', () => {
        expect(reversestr('horse')).toBe('esroh');
    })
})