function Baby(name, age, favoriteToy) {
}

Baby.prototype.play = function (favoriteToy) {
    return `playing with ${favoriteToy}`
}

const baby = new Baby()

console.log(baby.play('teddy'))