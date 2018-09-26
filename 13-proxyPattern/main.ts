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

export class OwnerPersonBean implements PersonBean {
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

export class NonOwnerPersonBean implements PersonBean {
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

function getOwnerProxy(person: PersonBean): PersonBean {
    return new OwnerPersonBean(person)
}

function getNonOwnerProxy(person: PersonBean): PersonBean {
    return new NonOwnerPersonBean(person)
}

const joe = new PersonBeanImpl()
const ownerProxy = getOwnerProxy(joe)
const nonOwnerProxy = getNonOwnerProxy(joe)

ownerProxy.setName('joe')
console.log(`nonOwnerProxy Name: ${nonOwnerProxy.getName()}`)

try {
    nonOwnerProxy.setName('matt')
} catch (err) {
    console.log(err)
}

try {
    ownerProxy.setHotOrNotRating(10)
} catch (err) {
    console.log(err)
}

nonOwnerProxy.setHotOrNotRating(12)
console.log(`nonOwnerProxy HotOrNotRating: ${ownerProxy.getHotOrNotRating()}`)

// import * as axios from 'axios'

// class Loader {}

// class Proxy {
//     constructor(private loader: Loader) {}

//     retrieving = false
//     image

//     paint() {
//         if (this.image) return this.loader.paint()

//         if (!this.retrieving) {
//             this.retrieving = true

//             axios.get('http://gooogle.com', _img => {
//                 this.image = _img
//             })

//             this.loader.load('http://gooogle.com')
//         }
//     }
// }
