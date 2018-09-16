import { MenuComponent } from '../component/MenuComponent'

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
