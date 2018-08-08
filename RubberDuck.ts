import { Duck, DuckInterface } from './models/Duck'
import { Squeack } from './models/QuackBehaviour'
import { FlyNoWay } from '../duckFun/models/FlyBehaviour'

export class RubberDuck extends Duck implements DuckInterface {
    flyBehaviour = new FlyNoWay()
    quackBehaviour = new Squeack()

    display() {
        console.log(`Here I am ${this.name} Rubber DUCK`)
    }
}
