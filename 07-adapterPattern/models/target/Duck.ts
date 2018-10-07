export interface Duck {
    quack(): void
    fly(): void
}

export class MallardDuck implements Duck {
    quack(): void {
        console.log(`Quack`)
    }

    fly(): void {
        console.log(`I'm flying`)
    }
}
