import Car from './car.js'

const cars = new Set([
    ['Toyota', 'Corolla'],
    ['Ford', 'Mustang'],
    ['Honda', 'Civic'],
    ['Tesla', 'Model S'],
])

cars.forEach(([make, model]) => {
    let car = new Car(make, model)
    car.startEngine()
})
