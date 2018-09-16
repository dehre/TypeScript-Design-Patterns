import { MenuComponent } from './MenuComponent'
import { Iterator, CompositeIterator } from '../iterator/Iterator'

export class Menu extends MenuComponent {
    private menuComponents: MenuComponent[] = []
    private iterator: Iterator

    constructor(private name: string, private description: string) {
        super()
    }

    add(menuComponent: MenuComponent): void {
        this.menuComponents.push(menuComponent)
    }

    remove(menuComponent: MenuComponent): void {
        const i = this.menuComponents.indexOf(menuComponent)
        if (i > -1) this.menuComponents.splice(i, 1)
    }

    getChild(i: number): MenuComponent {
        if (i < this.menuComponents.length) {
            return this.menuComponents[i]
        }
    }

    getName(): string {
        return this.name
    }

    getDescription(): string {
        return this.description
    }

    print(): void {
        console.log(`\n------> ${this.getName()}, ${this.getDescription()}\n`)
    }

    createIterator(): Iterator {
        if (!this.iterator) {
            this.iterator = new CompositeIterator(this.menuComponents)
        }

        return this.iterator
    }
}
