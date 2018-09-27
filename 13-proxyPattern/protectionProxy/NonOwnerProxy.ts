import { PersonBean } from '../subject/PersonBean'

export function getNonOwnerProxy(person: PersonBean): PersonBean {
    return new NonOwnerPersonBean(person)
}

class NonOwnerPersonBean implements PersonBean {
    constructor(private person: PersonBean) {}

    getName(): string {
        return this.person.getName()
    }

    getGender(): string {
        return this.person.getGender()
    }

    getInterests(): string {
        return this.person.getInterests()
    }

    getHotOrNotRating(): number {
        return this.person.getHotOrNotRating()
    }

    setName(_name: string): void {
        throw new Error(`you cannot set other's properties!`)
    }

    setGender(_gender: string): void {
        throw new Error(`you cannot set other's properties!`)
    }

    setInterests(_interests: string): void {
        throw new Error(`you cannot set other's properties!`)
    }

    setHotOrNotRating(rating: number): void {
        this.person.setHotOrNotRating(rating)
    }
}
