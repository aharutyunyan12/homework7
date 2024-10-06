function Person(name, age) {
    this.name = name
    this.age = age
    this.stomach = []
}

Person.prototype.eat = function (someFood) {
    if (this.stomach.length < 10) {
        return this.stomach.push(someFood)
    }
}

Person.prototype.poop = function () {
    return this.stomach = []
}

Person.prototype.toString = function () {
    return `${this.name}, ${this.age}`
}


const person = new Person('Anna', 16)

console.log(person.eat('banana'))

console.log(person.poop())

console.log(person.toString())