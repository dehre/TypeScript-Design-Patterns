export interface Command {
    execute(): void
    undo(): void
}

export class NoCommand implements Command {
    execute(): void {}
    undo(): void {}
}
