import { Pizza, CheesePizza, ClamPizza } from '../abstractFactory/Pizza'
import { NyPizzaIngredientFactory, ChicagoPizzaIngredientFactory } from '../abstractFactory/PizzaIngredientFactory'

// Factory Method relies on inheritance: object creation is delegated to subclasses,
// which implement the factory method - createPizza() - to create objects
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

export class NYPizzaStore extends PizzaStore {
    ingredientFactory = new NyPizzaIngredientFactory()

    createPizza(type: string): Pizza {
        let pizza: Pizza
        switch (type) {
            case 'cheese':
                pizza = new CheesePizza(this.ingredientFactory)
                pizza.setName('New York Style Cheese Pizza')
                return pizza
            case 'clam':
                pizza = new ClamPizza(this.ingredientFactory)
                pizza.setName('New York Style Clam Pizza')
                return pizza
        }
    }
}

export class ChicagoPizzaStore extends PizzaStore {
    ingredientFactory = new ChicagoPizzaIngredientFactory()

    createPizza(type: string): Pizza {
        let pizza: Pizza
        switch (type) {
            case 'cheese':
                pizza = new CheesePizza(this.ingredientFactory)
                pizza.setName('Chicago Style Cheese Pizza')
                return pizza
            case 'clam':
                pizza = new ClamPizza(this.ingredientFactory)
                pizza.setName('Chicago Style Clam Pizza')
                return pizza
        }
    }
}
