export class CeilingFan {
    static HIGH = 3
    static MEDIUM = 2
    static LOW = 1
    static OFF = 0
    private speed: number

    constructor(private location: string) {
        this.speed = CeilingFan.OFF
    }

    high(): void {
        this.speed = CeilingFan.HIGH
        console.log('Ceiling Fan is high')
    }

    medium(): void {
        this.speed = CeilingFan.MEDIUM
        console.log('Ceiling Fan is medium')
    }

    low(): void {
        this.speed = CeilingFan.LOW
        console.log('Ceiling Fan is low')
    }

    off(): void {
        this.speed = CeilingFan.OFF
        console.log('Ceiling Fan is off')
    }

    getSpeed(): number {
        return this.speed
    }
}
