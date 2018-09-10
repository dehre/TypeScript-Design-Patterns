import { MenuItem } from '../MenuItem'

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
