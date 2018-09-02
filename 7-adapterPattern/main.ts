import { MallardDuck, Duck } from './models/target/Duck'
import { WildTurkey, Turkey } from './models/adaptee/Turkey'
import { TurkeyAdapter } from './models/adapter/TurkeyAdapter'

const mallardDuck: Duck = new MallardDuck()
const wildTurkey: Turkey = new WildTurkey()

// -- DUCK --
console.log('\nThe duck says..')
mallardDuck.quack()
mallardDuck.fly()

// -- TURKEY --
console.log('\nThe turkey says..')
wildTurkey.gobble()
wildTurkey.fly()

// -- TURKEY ADAPTER --
const wildTurkeyAdapter: Duck = new TurkeyAdapter(wildTurkey)

console.log('\nThe wild turkey adapter says..')
wildTurkeyAdapter.quack()
wildTurkeyAdapter.fly()
