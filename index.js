const Calculator = require('./src/calculator')

const calculator = new Calculator()

console.log(calculator.sum(10, 20))
console.log(calculator.sub(20, 10))
console.log(calculator.div(10, 20))
console.log(calculator.times(10, 20))