import { Menu } from '../aggregators/Menu'
import { Iterator } from '../iterators/Iterator'

export class Waitress {
    constructor(private menus: Menu[]) {}

    printMenu(): void {
        this.menus.forEach(menu => {
            const iterator = menu.createIterator()
            this.print(iterator)
        })
    }

    private print(iterator: Iterator): void {
        while (iterator.hasNext()) {
            const item = iterator.next()
            console.log(`${item.name}, ${item.price} -- ${item.description}\n`)
        }
    }
}
