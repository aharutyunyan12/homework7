function Calculator() {
    this.add = function (number1, number2) {
        return number1 + number2
    }
    this.subtract = function (number1, number2) {
        return number1 - number2
    }
    this.multiply = function (number1, number2) {
        return number1 * number2
    }
    this.divide = function (number1, number2) {
        return number1 / number2
    }
}

const calculator = new Calculator()

console.log(calculator.add(10, 5))
console.log(calculator.subtract(10, 5))
console.log(calculator.multiply(10, 5))
console.log(calculator.divide(10, 5))