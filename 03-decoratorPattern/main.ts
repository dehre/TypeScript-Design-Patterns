import { Espresso, HouseBlend } from './models/beverage/Beverage'
import { Mocha, Whip } from './models/decorators/CondimentDecorator'

// class StarbuzzCoffee {
//     main(): void {}
// }

const espresso = new Espresso()
console.log(espresso.getDescription())

let house = new HouseBlend()
house = new Mocha(house)
house = new Whip(house)
console.log(house.getDescription())
console.log(house.cost())
