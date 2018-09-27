import { PersonBeanImpl } from './realSubject/PersonBeanImpl'
import { getOwnerProxy, getNonOwnerProxy } from './protectionProxy'

const joe = new PersonBeanImpl()
// 2 protection proxies on the same subject implementation
const ownerProxy = getOwnerProxy(joe)
const nonOwnerProxy = getNonOwnerProxy(joe)

ownerProxy.setName('joe')
console.log(`nonOwnerProxy Name: ${nonOwnerProxy.getName()}`)

try {
    nonOwnerProxy.setName('matt') // fails
} catch (err) {
    console.log(err)
}

try {
    ownerProxy.setHotOrNotRating(10) // fails
} catch (err) {
    console.log(err)
}

nonOwnerProxy.setHotOrNotRating(12)
console.log(`nonOwnerProxy HotOrNotRating: ${ownerProxy.getHotOrNotRating()}`)
