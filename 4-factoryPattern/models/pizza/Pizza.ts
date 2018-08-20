export abstract class Pizza {
    abstract name: string
    abstract dough: string
    abstract sauce: string
    abstract toppings: string[] = []

    prepare(): void {
        console.log(`Preparing ${this.name}`)
        console.log(`Tossing dough ${this.dough}`)
        console.log(`Adding sauce ${this.sauce}`)
        console.log(`Adding toppings ${this.toppings.join(', ')}..`)
    }

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
}

export class NyStyleCheesePizza extends Pizza {
    name = 'NY Style Sauce and Cheese Pizza'
    dough = 'Thin Crust Dough'
    sauce = 'Marinara Sauce'
    toppings = ['Grated Reggiano Cheese']
}

export class ChicagoStyleCheesePizza extends Pizza {
    name = 'Chicago Style Deep Dish Cheese Pizza'
    dough = 'Extra Thick Crust Dough'
    sauce = 'Plum Tomato Sauce'
    toppings = ['Shredded Mozzarella Cheese']

    cut(): void {
        console.log('Cutting the pizza into square slices')
    }
}
