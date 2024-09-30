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
    let requiredFuel = this.distance / this.milesPerGallon
    if (requiredFuel > this.tank) {
        drivenDistance = this.tank * this.milesPerGallon
        this.odometer += drivenDistance
        this.tank = 0
        return `i run out of fuel at ${this.odometer} milles`
    }
    else {
        this.tank -= requiredFuel
        this.odometer += distance
    }
}

const car = new Car('BMW', 200)
car.fill(50)
console.log(car.drive(100))