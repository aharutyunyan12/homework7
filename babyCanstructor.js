function Person(name, age){
    this.name = name
    this.age = age
}

function Baby(favoriteToy) {}

Baby.prototype.play = function (favoriteToy) {
    return `playing with ${favoriteToy}`
}

const baby = new Baby()

console.log(baby.play('teddy'))