import Car from '@src/car'

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
