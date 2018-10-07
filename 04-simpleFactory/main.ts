import { Pizza } from './models/pizza/Pizza'
import { SimplePizzaFactory } from './models/factory/SimplePizzaFactory'

export class PizzaStore {
    constructor(private factory: SimplePizzaFactory){}

    orderPizza(type: string): Pizza {
        const pizza = this.factory.createPizza(type)
        pizza.prepare()
        pizza.bake()
        pizza.cut()
        pizza.box()

        return pizza
    }
}

const factory = new SimplePizzaFactory()
new PizzaStore(factory).orderPizza('cheese')

