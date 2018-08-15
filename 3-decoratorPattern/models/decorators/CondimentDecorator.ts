import { Beverage } from '../beverage/Beverage'

export abstract class CondimentDecorator extends Beverage {
    constructor(protected beverage: Beverage) {
        super()
    }
    abstract getDescription(): string
}

export class Mocha extends CondimentDecorator {
    getDescription(): string {
        return this.beverage.getDescription() + ', Mocha'
    }

    cost(): number {
        return this.beverage.cost() + 21
    }
}

export class Whip extends CondimentDecorator {
    getDescription(): string {
        return this.beverage.getDescription() + ', Whip'
    }

    cost(): number {
        return this.beverage.cost() + 44
    }
}
