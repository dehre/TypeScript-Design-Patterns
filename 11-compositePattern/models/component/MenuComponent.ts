import { Iterable, Iterator } from '../iterator/Iterator'
import { UnsupportedOperationError } from '../../../utilities'

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
