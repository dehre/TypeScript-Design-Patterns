import { Beverage } from '../beverage/Beverage'

export abstract class CondimentDecorator extends Beverage {
    abstract getDescription(): string
}

export class Mocha extends CondimentDecorator {
    constructor(private beverage: Beverage) {
        super()
    }

    getDescription(): string {
        return this.beverage.getDescription() + ', Mocha'
    }

    cost(): number {
        return this.beverage.cost() + 21
    }
}

export class Whip extends CondimentDecorator {
    constructor(private beverage: Beverage) {
        super()
    }

    getDescription(): string {
        return this.beverage.getDescription() + ', Whip'
    }

    cost(): number {
        return this.beverage.cost() + 44
    }
}
