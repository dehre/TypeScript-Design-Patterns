import { Duck, DuckInterface } from './models/Duck'
import { FlyWithWings } from './models/FlyBehaviour'
import { Quack } from './models/QuackBehaviour'

export class MallardDuck extends Duck implements DuckInterface {
    flyBehaviour = new FlyWithWings()
    quackBehaviour = new Quack()

    display() {
        console.log('Here I am a mullard DUCK! Watch me!')
    }
}
