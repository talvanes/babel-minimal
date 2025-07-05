function Car(make, model) {
    this.make = make
    this.model = model
}

Car.prototype.startEngine = function () {
    console.log(`My ${this} has started`)
}

Car.prototype.toString = function () {
    return `${this.make} ${this.model}`
}

module.exports = Car
