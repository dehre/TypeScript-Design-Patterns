import { FlyBehaviourInterface, FlyWithWings, FlyNoWay } from '../behaviours/FlyBehaviour'
import { QuackBehaviourInterface, Quack, Squeack } from '../behaviours/QuackBehaviour'

export interface DuckInterface {
    flyBehaviour: FlyBehaviourInterface
    quackBehaviour: QuackBehaviourInterface
    display(): void
    swim(): void
    performFly(): void
    performQuack(): void
    setFlyBehaviour(fb: FlyBehaviourInterface): void
    setQuackBehaviour(qb: QuackBehaviourInterface): void
}

export abstract class Duck implements DuckInterface {
    constructor(public name: string) {}

    abstract flyBehaviour: FlyBehaviourInterface
    abstract quackBehaviour: QuackBehaviourInterface
    abstract display(): void

    swim(): void {
        console.log(`Hi, let's go swim!`)
    }

    performFly(): void {
        this.flyBehaviour.fly()
    }

    performQuack(): void {
        this.quackBehaviour.quack()
    }

    setFlyBehaviour(fb: FlyBehaviourInterface): void {
        this.flyBehaviour = fb
    }

    setQuackBehaviour(qb: QuackBehaviourInterface): void {
        this.quackBehaviour = qb
    }
}

// implementation
export class MallardDuck extends Duck implements DuckInterface {
    flyBehaviour = new FlyWithWings()
    quackBehaviour = new Quack()

    display() {
        console.log(`Here I am a mullard DUCK ${this.name}! Watch me!`)
    }
}

// implementation
export class RubberDuck extends Duck implements DuckInterface {
    flyBehaviour = new FlyNoWay()
    quackBehaviour = new Squeack()

    display() {
        console.log(`Here I am ${this.name} Rubber DUCK`)
    }
}
