import { Command } from './Command'

export class MacroCommand implements Command {
    constructor(private commands: Command[]) {}

    execute(): void {
        this.commands.forEach(c => c.execute())
    }

    undo(): void {
        this.commands.forEach(c => c.undo())
    }
}
