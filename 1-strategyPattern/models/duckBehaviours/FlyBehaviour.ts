export interface FlyBehaviourInterface {
    fly(): void
}

// implementation
export class FlyWithWings implements FlyBehaviourInterface {
    fly(): void {
        console.log(`I'm flying!`)
    }
}

// implementation
export class FlyNoWay implements FlyBehaviourInterface {
    fly(): void {
        console.log(`I can't fly`)
    }
}
