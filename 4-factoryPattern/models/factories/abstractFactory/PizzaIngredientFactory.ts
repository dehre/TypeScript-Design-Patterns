import { Dough, Sauce, Topping, ThinCrustDough, MarinaraSouce, Garlic, Onion, Mozzarella, ExtraThickCrustDough, Reggiano, TomatoSouce } from '../../ingredients/Ingredients'

// Abstract Factory relies on object composition: 
// object creation is implemented in methods exposed in the factory interface
export interface PizzaIngredientFactoryInterface {
    createDough: () => Dough
    createSauce: () => Sauce
    createToppings: () => Topping[]
}

export class NyPizzaIngredientFactory implements PizzaIngredientFactoryInterface {
    createDough (): Dough {
        return new ThinCrustDough()
    }

    createSauce (): Sauce {
        return new MarinaraSouce()
    }

    createToppings (): Topping[] {
        return [new Mozzarella(), new Onion()]
    }
}

export class ChicagoPizzaIngredientFactory implements PizzaIngredientFactoryInterface {
    createDough (): Dough {
        return new ExtraThickCrustDough()
    }

    createSauce (): Sauce {
        return new TomatoSouce()
    }

    createToppings (): Topping[] {
        return [new Reggiano(), new Garlic()]
    }
}