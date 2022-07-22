const Calculator = require('./calculator');

describe('add', () => {
    test ('add two positive numbers: 14 and 21', () => {
        const trial = new Calculator(14, 21);
        expect(trial.add()).toBe(35);
    });

    test ('add two negative numbers: -14 and -21', () => {
        const trial = new Calculator(-14, -21);
        expect(trial.add()).toBe(-35);
    });

    test ('add a negative number and a positive number: -14 and 21', () => {
        const trial = new Calculator(-14, 21);
        expect(trial.add()).toBe(7);
    });
});

describe('substract', () => {
    test('substract two numbers where minuend > subtrahend: 31 and 12', () => {
        const trial = new Calculator(31, 12);
        expect(trial.substract()).toBe(19);
    });
    
    test('substract two numbers where minuend > subtrahend: 12 and 31', () => {
        const trial = new Calculator(12, 31);
        expect(trial.substract()).toBe(-19);
    });

    test('substract two numbers where minuend === subtrahend: 12 and 12', () => {
        const trial = new Calculator(12, 12);
        expect(trial.substract()).toBe(0);
    });
});

describe('divide', () => {
    test('divide two numbers !== 0: 29 and 8', () => {
        const trial = new Calculator(29, 8);
        expect(trial.divide()).toBe(3.625);
    });

    test('divide two numbers, were divisor === 0', () => {
        const trial = new Calculator(29, 0);
        expect(trial.divide()).toEqual('undefined, It is no posible to divide by 0');
    });

    test('divide 0 by 0', () => {
        const trial = new Calculator(0, 0);
        expect(trial.divide()).toEqual('undefined, it is no posible to divide 0/0');
    });
});

describe('multiply', () => {
    test('multiply two positive numbers !== 0: 13 and 85', () => {
        const trial = new Calculator(13, 85);
        expect(trial.multiply()).toBe(1105);
    });

    test('multiply two negative numbers !== 0: -13 and -85', () => {
        const trial = new Calculator(-13, -85);
        expect(trial.multiply()).toBe(1105);
    });

    test('multiply two numbers, were second number is 0: -13 and 0', () => {
        const trial = new Calculator(13, 0);
        expect(trial.multiply()).toBe(0);
    });
});