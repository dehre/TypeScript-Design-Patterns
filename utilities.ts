import { createInterface } from 'readline'

export function getRandomNumberBetween(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export function promptAsk(question: string): Promise<string> {
    var r = createInterface({
        input: process.stdin,
        output: process.stdout,
    })
    return new Promise(res => {
        r.question(question + '\n', function(answer) {
            r.close()
            res(answer)
        })
    })
}

export class UnsupportedOperationError extends Error {
    constructor() {
        super()
        this.message = 'the following operation is not supported'
    }
}
