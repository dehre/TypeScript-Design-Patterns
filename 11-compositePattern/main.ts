export class UnsupportedOperationError extends Error {
    constructor() {
        super()
        this.message = 'the following operation is not supported'
    }
}

export interface Iterator {
    hasNext(): boolean
    next(): MenuComponent
}

export interface Iterable {
    createIterator(): Iterator
}

export class NullIterator implements Iterator {
    hasNext(): boolean {
        return false
    }

    next(): MenuComponent {
        return null
    }
}

export abstract class MenuComponent implements Iterable {
    add(_menuComponent: MenuComponent): void {
        throw new UnsupportedOperationError()
    }

    remove(_menuComponent: MenuComponent): void {
        throw new UnsupportedOperationError()
    }

    getChild(_i: number): MenuComponent {
        throw new UnsupportedOperationError()
    }

    getName(): string {
        throw new UnsupportedOperationError()
    }

    getDescription(): string {
        throw new UnsupportedOperationError()
    }

    getPrice(): number {
        throw new UnsupportedOperationError()
    }

    isVegetarian(): boolean {
        throw new UnsupportedOperationError()
    }

    print(): void {
        throw new UnsupportedOperationError()
    }

    createIterator(): Iterator {
        throw new UnsupportedOperationError()
    }
}

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
        this.menuComponents.forEach(menuComponent => {
            menuComponent.print()
        })
    }

    createIterator(): Iterator {
        if (!this.iterator) {
            this.iterator = new CompositeIterator(this.menuComponents)
        }

        return this.iterator
    }
}

export class Waitress {
    constructor(private allMenus: MenuComponent) {}

    printMenu(): void {
        this.allMenus.print()
    }

    printVegetarianMenu(): void {
        const iterator = this.allMenus.createIterator()

        console.log('--- VEGETARIAN MENU ---')
        while (iterator.hasNext()) {
            const menuComponent = iterator.next()
            try {
                if (menuComponent.isVegetarian()) menuComponent.print()
            } catch (err) {}
        }
    }
}

export class CompositeIterator implements Iterator {
    private stack: MenuComponent[] = []

    constructor(components: MenuComponent[]) {
        this.stack = components
    }

    hasNext(): boolean {
        if (this.stack.length === 0) return false

        const topElement = this.stack[this.stack.length - 1]
        const topElemIterator = topElement.createIterator()
        const topElementHasNext = topElemIterator.hasNext()
        console.log()
        if (!topElementHasNext) {
            return true
        } else {
            this.stack.pop()
            return this.hasNext()
        }
    }

    next(): MenuComponent {
        if (!this.hasNext()) return null

        return this.stack.pop()
    }
}

// ----------------------------------------------------

const pancakeHouseMenu = new Menu('PANCAKE HOUSE MENU', 'Breakfast')
const dinerMenu = new Menu('DINER MENU', 'Lunch')
const cafeMenu = new Menu('CAFÉ MENU', 'Dinner')
const dessertMenu = new Menu('DESSERT MENU', 'Dessert of course!')

const allMenus = new Menu('ALL MENUS', 'All menus combined')
// allMenus.add(pancakeHouseMenu)
allMenus.add(dinerMenu)
// allMenus.add(cafeMenu)

dinerMenu.add(new MenuItem('Pasta', 'Spaghetti with Marinara Sauce, and a slice of sourdough bread', true, 3.89))
dinerMenu.add(dessertMenu)
dessertMenu.add(new MenuItem('Apple Pie', 'Apple pie with a flakey crust, topped with vanilla icecream', true, 1.59))

// other menu items here

const waitress = new Waitress(allMenus)
waitress.printVegetarianMenu()
