function Person(name, age) {
    this.name = name
    this.age = age
}

Person.prototype.compareAge = function (person2) {
    if (person2.age > this.age) {
        return `${person2.name} is older than me`
    }
    else if (person2.age < this.age) {
        return `${person2.name} is younger than me`
    }
    else {
        return `${person2.name} is the same age as me`
    }
} 

const p1 = new Person("Samuel", 24)
const p2 = new Person("Joel", 36)
const p3 = new Person("Lily", 24)

console.log(p1.compareAge(p2))