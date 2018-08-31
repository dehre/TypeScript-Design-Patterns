import { Command, NoCommand } from '../commands/Commands'

export class RemoteControl {
    onCommands: Command[] = []
    offCommands: Command[] = []
    undoCommand: Command

    constructor() {
        for (let i = 0; i < 6; i++) {
            this.onCommands[i] = new NoCommand()
            this.offCommands[i] = new NoCommand()
        }
        this.undoCommand = new NoCommand()
    }

    setCommand(slot: number, onCommand: Command, offCommand: Command): void {
        this.onCommands[slot] = onCommand
        this.offCommands[slot] = offCommand
    }

    onButtonWasPressed(slot: number): void {
        this.onCommands[slot].execute()
        this.undoCommand = this.onCommands[slot]
    }

    offButtonWasPressed(slot: number): void {
        this.offCommands[slot].execute()
        this.undoCommand = this.offCommands[slot]
    }

    undoButtonWasPressed(): void {
        this.undoCommand.undo()
    }

    toString(): string {
        let result = '-----Remote Control------\n'
        // prettier-ignore
        for(let i=0; i<this.onCommands.length; i++)
            result += `[slot ${i}] -- ${this.onCommands[i].constructor.name} - ${this.offCommands[i].constructor.name}\n`

        return result
    }
}
