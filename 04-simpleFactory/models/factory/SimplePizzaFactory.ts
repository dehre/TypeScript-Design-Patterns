import { Pizza, CheesePizza, ClamPizza } from '../pizza/Pizza'

export class SimplePizzaFactory {
    createPizza(type: string): Pizza {
        switch (type){
            case 'cheese': 
                return new CheesePizza()
            case 'clam':
                return new ClamPizza()
        }
    }
}
