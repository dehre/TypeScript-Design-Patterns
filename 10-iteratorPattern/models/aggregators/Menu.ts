import { MenuItem } from '../MenuItem'
import { Iterator, PancakeHouseMenuIterator, DinerMenuIterator } from '../iterators/Iterator'

export interface Menu {
    createIterator(): Iterator
}

export class PancakeHouseMenu implements Menu {
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
        console.log('--- MENU BREAKFAST ---\n')
        return new PancakeHouseMenuIterator(this.menuItems)
    }
}

export class DinerMenu implements Menu {
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
        console.log('--- MENU LUNCH ---\n')
        return new DinerMenuIterator(this.menuItems)
    }
}
