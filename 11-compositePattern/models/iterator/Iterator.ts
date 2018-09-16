import { MenuComponent } from '../component/MenuComponent'

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
        if (this.hasNext()) {
            return this.stack.pop()
        }

        return null
    }
}
