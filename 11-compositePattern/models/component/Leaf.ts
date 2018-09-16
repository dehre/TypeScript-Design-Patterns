import { MenuComponent } from './MenuComponent'
import { Iterator, NullIterator } from '../iterator/Iterator'

export class MenuItem extends MenuComponent {
    constructor(private name: string, private description: string, private vegetarian: boolean, private price: number) {
        super()
    }

    getName(): string {
        return this.name
    }

    getDescription(): string {
        return this.description
    }

    isVegetarian(): boolean {
        return this.vegetarian
    }

    getPrice(): number {
        return this.price
    }

    print() {
        console.log(
            `${this.getName()} ${this.isVegetarian() ? '(v)' : ''}, ${this.getDescription()} -- ${this.getPrice()}`,
        )
    }

    createIterator(): Iterator {
        return new NullIterator()
    }
}
