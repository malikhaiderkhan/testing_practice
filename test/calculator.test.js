const calculator = require('../src/calculator');
describe('calculator', () => {
    const calc = new calculator();
    test('2+3 should be "5"', () => {
        expect(calc.add(2,3)).toBe(5);
    });
    test('5+3 should be "5"', () => {
        expect(calc.add(5,3)).toBe(8);
    });
    test('2+9 should be "11"', () => {
        expect(calc.add(2,9)).toBe(11);
    });

    test('3-2 should be "1"', () => {
        expect(calc.subtract(3,2)).toBe(1);
    });
    test('5-2 should be "3"', () => {
        expect(calc.subtract(5,2)).toBe(3);
    });
    test('3-1 should be "2"', () => {
        expect(calc.subtract(3,1)).toBe(2);
    });

    test('3*2 should be "6"', () => {
        expect(calc.multiply(3,2)).toBe(6);
    });
    test('5*2 should be "10"', () => {
        expect(calc.multiply(5,2)).toBe(10);
    });
    test('3*3 should be "9"', () => {
        expect(calc.multiply(3,3)).toBe(9);
    });

    test('4/2 should be "2"', () => {
        expect(calc.divide(4,2)).toBe(2);
    });
    test('10/2 should be "5"', () => {
        expect(calc.divide(10,2)).toBe(5);
    });
    test('10/5 should be "2"', () => {
        expect(calc.divide(10,5)).toBe(2);
    });
});