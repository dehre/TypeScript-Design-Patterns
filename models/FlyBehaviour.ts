export interface FlyBehaviourInterface {
    fly(): void
}

export class FlyWithWings implements FlyBehaviourInterface {
    fly(): void {
        console.log(`I'm flying!`)
    }
}

export class FlyNoWay implements FlyBehaviourInterface {
    fly(): void {
        console.log(`I can't fly`)
    }
}
