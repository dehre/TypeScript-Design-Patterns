import { MallardDuck } from './models/duck/Duck'
import { FlyNoWay } from './models/duckBehaviours/FlyBehaviour'

const mallard = new MallardDuck('myName')

mallard.swim()
mallard.performFly()
mallard.performQuack()
mallard.display()

// set behaviour at runtime
mallard.setFlyBehaviour(new FlyNoWay())
mallard.performFly()
