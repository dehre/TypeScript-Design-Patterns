import { MallardDuck } from './MallardDuck'
import { FlyNoWay } from './models/FlyBehaviour'

const mallard = new MallardDuck('myName')

console.log(mallard.swim())
console.log(mallard.performFly())
console.log(mallard.performQuack())
console.log(mallard.display())

mallard.setFlyBehaviour(new FlyNoWay())
mallard.performFly()
