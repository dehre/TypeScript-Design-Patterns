export interface PersonBean {
    getName(): string
    getGender(): string
    getInterests(): string
    getHotOrNotRating(): number
    setName(name: string): void
    setGender(gender: string): void
    setInterests(interests: string): void
    setHotOrNotRating(rating: number): void
}
