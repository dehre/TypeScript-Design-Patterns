export abstract class Beverage {
    description: string = 'Unknown Beverage'
    getDescription(): string {
        return this.description
    }

    abstract cost(): number
}

export class Espresso extends Beverage {
    description = 'Espresso'

    cost(): number {
        return 200
    }
}

export class HouseBlend extends Beverage {
    description = 'House Blend Coffee'

    cost(): number {
        return 120
    }
}
