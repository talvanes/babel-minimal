export default class Car {
    /**
     * @param {string} make
     * @param {string} model
     */
    constructor(make, model) {
        this.make = make
        this.model = model
    }

    startEngine() {
        console.log(`My ${this} has started`)
    }

    toString() {
        return `${this.make} ${this.model}`
    }
}
