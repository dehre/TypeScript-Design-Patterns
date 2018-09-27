import { PersonBean } from '../subject/PersonBean'

export function getOwnerProxy(person: PersonBean): PersonBean {
    return new OwnerPersonBean(person)
}

class OwnerPersonBean implements PersonBean {
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

    setName(name: string): void {
        this.person.setName(name)
    }

    setGender(gender: string): void {
        this.person.setGender(gender)
    }

    setInterests(interests: string): void {
        this.person.setInterests(interests)
    }

    setHotOrNotRating(_rating: number): void {
        throw new Error('you cannot set your own hotOrNot rating!')
    }
}
