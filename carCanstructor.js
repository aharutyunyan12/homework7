function Car(model, milesPerGallon) {
    this.tank = 0
    this.odometer = 0
    this.milesPerGallon = milesPerGallon
    this.model = model
}

Car.prototype.fill = function (gallons) {
    this.tank += gallons
}

Car.prototype.drive = function (distance) {
    let requiredFuel = distance / this.milesPerGallon
    if (requiredFuel > this.tank) {
        let drivenDistance = this.tank * this.milesPerGallon
        this.odometer += drivenDistance
        this.tank = 0
        return `i run out of fuel at ${this.odometer} milles`
    }
    else {
        this.tank -= requiredFuel
        this.odometer += distance
        return `i run out of fuel at ${this.odometer} milles`
    }
}

const car = new Car('BMW', 5)
car.fill(10)

console.log(car.drive(100))