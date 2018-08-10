export interface QuackBehaviourInterface {
    quack(): void
}

export class Quack implements QuackBehaviourInterface {
    quack(): void {
        console.log('Quack')
    }
}

export class MuteQuack implements QuackBehaviourInterface {
    quack(): void {
        console.log('Silence')
    }
}

export class Squeack implements QuackBehaviourInterface {
    quack(): void {
        console.log('Squeack')
    }
}
