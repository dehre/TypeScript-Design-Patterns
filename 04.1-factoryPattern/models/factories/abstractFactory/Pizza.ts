import { PizzaIngredientFactoryInterface } from './PizzaIngredientFactory'

export abstract class Pizza {
    protected name: string
    abstract prepare(): void

    bake(): void {
        console.log('Bake for 25 minutes at 350')
    }

    cut(): void {
        console.log('Cutting pizza into diagonal slices')
    }

    box(): void {
        console.log('Place pizza in official PizzaStore box')
    }

    getName(): string {
        return this.name
    }

    setName(name: string): void {
        this.name = name
    }
}

export class CheesePizza extends Pizza {
    constructor(private ingredientFactory: PizzaIngredientFactoryInterface){
        super()
    }

    prepare(): void {
        console.log(`Preparing ${this.name}`)
        this.ingredientFactory.createDough()
        this.ingredientFactory.createSauce()
        this.ingredientFactory.createToppings()
    }
}

export class ClamPizza extends Pizza {
    constructor(private ingredientFactory: PizzaIngredientFactoryInterface){
        super()
    }

    prepare(): void {
        console.log(`Preparing ${this.name}`)
        this.ingredientFactory.createDough()
        this.ingredientFactory.createSauce()
        this.ingredientFactory.createToppings()
    }

    // overwrite parent method
    cut(): void {
        console.log('Cutting the pizza into square slices')
    }
}
