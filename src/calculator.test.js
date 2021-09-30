const Calculator = require('./calculator')


test('should return 30 because 10 + 20 = 30', () => {
    const calculator = new Calculator()

    expect(calculator.sum(10, 20)).toBe(30)
})

test('should return 10 because 30 - 20 = 10', () => {
    const calculator = new Calculator()

    expect(calculator.sub(30, 20)).toBe(10)
})

test('should return 300 because 10 * 30 = 300', () => {
    const calculator = new Calculator()

    expect(calculator.times(10, 30)).toBe(300)
})

test('should return 3 because 30 / 10 = 3', () => {
    const calculator = new Calculator()

    expect(calculator.div(30, 10)).toBe(3)
})