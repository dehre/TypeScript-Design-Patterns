export class MenuItem {
    constructor(public name: string, public description: string, public vegetarian: boolean, public price: number) {}
}

export class PancakeHouseMenu {
    menuItems: { [name: string]: MenuItem } = {}

    constructor() {
        this.addItem(`K&B's Pancake Breakfast`, `Pancakes with scrambled eggs, and toast`, true, 2.99)
        this.addItem('Regular Pancake Breakfast', 'Pancakes with fried eggs, sausage', false, 2.99)
        this.addItem('Blueberry Pancakes', 'Pancakes made with fresh blueberries', true, 3.49)
    }

    addItem(name: string, description: string, vegetarian: boolean, price: number) {
        const newItem = new MenuItem(name, description, vegetarian, price)
        this.menuItems[name] = newItem
    }

    createIterator(): Iterator {
        return new PancakeHouseMenuIterator(this.menuItems)
    }
}

export class DinerMenu {
    menuItems: MenuItem[] = []

    constructor() {
        this.addItem('Vegetarian BLT', `(Fakin') Bacon with lettuce & tomato on whole wheat`, true, 3.99)
        this.addItem('BLT', `Bacon with lettuce & tomato on whole wheat`, false, 2.99)
        this.addItem('Soup of the day', `Soup of the day, with a side of potato salad`, true, 3.29)
    }

    addItem(name: string, description: string, vegetarian: boolean, price: number) {
        const newItem = new MenuItem(name, description, vegetarian, price)
        this.menuItems.push(newItem)
    }

    createIterator(): Iterator {
        return new DinerMenuIterator(this.menuItems)
    }
}

export interface Iterator {
    hasNext(): boolean
    next(): MenuItem
}

export class PancakeHouseMenuIterator implements Iterator {
    keys: string[]
    constructor(private items: { [name: string]: MenuItem }) {
        this.keys = Object.keys(this.items)
    }

    hasNext(): boolean {
        if (this.keys.length > 0) return true
        return false
    }

    next(): MenuItem {
        return this.items[this.keys.pop()]
    }
}

export class DinerMenuIterator implements Iterator {
    position = 0
    constructor(private items: MenuItem[]) {}

    hasNext(): boolean {
        if (this.position >= this.items.length) return false
        return true
    }

    next(): MenuItem {
        const item = this.items[this.position]
        this.position++
        return item
    }
}

export class Waitress {
    constructor(private pancakeHouseMenu: PancakeHouseMenu, private dinerMenu: DinerMenu) {}

    printMenu(): void {
        const pancakeIterator = this.pancakeHouseMenu.createIterator()
        const dinerIterator = this.dinerMenu.createIterator()

        console.log('--- MENU BREAKFAST ---')
        this.iterate(pancakeIterator)
        console.log('--- MENU LUNCH ---')
        this.iterate(dinerIterator)
    }

    private iterate(iterator: Iterator): void {
        while (iterator.hasNext()) {
            const item = iterator.next()
            console.log(`${item.name}, ${item.price} -- ${item.description}\n`)
        }
    }
}

const pancakeMenu = new PancakeHouseMenu()
const dinerMenu = new DinerMenu()
const waitress = new Waitress(pancakeMenu, dinerMenu)
waitress.printMenu()
