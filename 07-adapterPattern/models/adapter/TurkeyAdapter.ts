import { Duck } from '../target/Duck'
import { Turkey } from '../adaptee/Turkey'

export class TurkeyAdapter implements Duck {
    constructor(private turkey: Turkey) {}

    quack(): void {
        this.turkey.gobble()
    }

    fly(): void {
        // turkeys can fly for short distances only, so we call the method 5 times
        for (let i = 0; i < 5; i++) {
            this.turkey.fly()
        }
    }
}
