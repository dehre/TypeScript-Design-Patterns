import { Command, NoCommand } from '../commands/Commands'

export class RemoteControl {
    onCommands: Command[] = []
    offCommands: Command[] = []

    constructor() {
        for (let i = 0; i < 4; i++) {
            this.onCommands[i] = new NoCommand()
            this.offCommands[i] = new NoCommand()
        }
    }

    setCommand(slot: number, onCommand: Command, offCommand: Command): void {
        this.onCommands[slot] = onCommand
        this.offCommands[slot] = offCommand
    }

    onButtonWasPressed(slot: number): void {
        this.onCommands[slot].execute()
    }

    offButtonWasPressed(slot: number): void {
        this.offCommands[slot].execute()
    }

    toString(): string {
        let result = '-----Remote Control------\n'
        // prettier-ignore
        for(let i=0; i<this.onCommands.length; i++)
            result += `[slot ${i}] -- ${this.onCommands[i].constructor.name} - ${this.offCommands[i].constructor.name}\n`

        return result
    }
}
