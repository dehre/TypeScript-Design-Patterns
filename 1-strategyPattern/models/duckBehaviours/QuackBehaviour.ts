export interface QuackBehaviourInterface {
    quack(): void
}

// implementation
export class Quack implements QuackBehaviourInterface {
    quack(): void {
        console.log('Quack')
    }
}

// implementation
export class MuteQuack implements QuackBehaviourInterface {
    quack(): void {
        console.log('Silence')
    }
}

// implementation
export class Squeack implements QuackBehaviourInterface {
    quack(): void {
        console.log('Squeack')
    }
}
