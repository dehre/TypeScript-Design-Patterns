import { Pizza, NyStyleCheesePizza, ChicagoStyleCheesePizza } from '../pizza/Pizza'

export abstract class PizzaStore {
    orderPizza(type: string): Pizza {
        const pizza = this.createPizza(type)
        pizza.prepare()
        pizza.bake()
        pizza.cut()
        pizza.box()
        return pizza
    }

    protected abstract createPizza(type: string): Pizza
}

// A factory method handles object creation and excapsulates it in a subclass
// This decouples the client code in the superclass from the object creation code in the subclass
export class NYPizzaStore extends PizzaStore {
    createPizza(type: string): Pizza {
        if (type === 'cheese') {
            return new NyStyleCheesePizza()
        }
    }
}

export class ChicagoPizzaStore extends PizzaStore {
    createPizza(type: string): Pizza {
        if (type === 'cheese') {
            return new ChicagoStyleCheesePizza()
        }
    }
}
