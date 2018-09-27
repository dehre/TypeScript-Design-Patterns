import { PersonBean } from '../subject/PersonBean'

export class PersonBeanImpl implements PersonBean {
    private name: string
    private gender: string
    private interests: string
    private rating = 0
    private ratingCount = 0

    getName(): string {
        return this.name
    }

    getGender(): string {
        return this.gender
    }

    getInterests(): string {
        return this.interests
    }

    getHotOrNotRating(): number {
        if (this.ratingCount === 0) return 0
        return this.rating / this.ratingCount
    }

    setName(name: string): void {
        this.name = name
    }

    setGender(gender: string): void {
        this.gender = gender
    }

    setInterests(interests: string): void {
        this.interests = interests
    }

    setHotOrNotRating(rating: number): void {
        this.rating += 1
        this.ratingCount++
    }
}
