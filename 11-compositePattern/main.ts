export class UnsupportedOperationError extends Error {
    constructor() {
        super()
        this.message = 'the following operation is not supported'
    }
}

export abstract class MenuComponent {
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
}

export class Menu extends MenuComponent {
    private menuComponents: MenuComponent[] = []

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
}

export class Waitress {
    constructor(private allMenus: MenuComponent) {}

    printMenu(): void {
        this.allMenus.print()
    }
}

// ----------------------------------------------------

const pancakeHouseMenu = new Menu('PANCAKE HOUSE MENU', 'Breakfast')
const dinerMenu = new Menu('DINER MENU', 'Lunch')
const cafeMenu = new Menu('CAFÉ MENU', 'Dinner')
const dessertMenu = new Menu('DESSERT MENU', 'Dessert of course!')

const allMenus = new Menu('ALL MENUS', 'All menus combined')
allMenus.add(pancakeHouseMenu)
allMenus.add(dinerMenu)
allMenus.add(cafeMenu)

dinerMenu.add(new MenuItem('Pasta', 'Spaghetti with Marinara Sauce, and a slice of sourdough bread', true, 3.89))
dinerMenu.add(dessertMenu)
dessertMenu.add(new MenuItem('Apple Pie', 'Apple pie with a flakey crust, topped with vanilla icecream', true, 1.59))

// other menu items here

const waitress = new Waitress(allMenus)
waitress.printMenu()
