function Person(name, age) {
    this.name = name
    this.age = age
    this.stomach = []

    this.eat = function (someFood) {
        if (this.stomach.length < 10) {
            return this.stomach.push(someFood)
        }
    }

    this.poop = function () {
        return this.stomach = []
    }

    this.toString = function () {
        return `${name}, ${age}`
    }
}

const person = new Person('Anna', 16)

console.log(person.eat('banana'))

console.log(person.poop())

console.log(person.toString())