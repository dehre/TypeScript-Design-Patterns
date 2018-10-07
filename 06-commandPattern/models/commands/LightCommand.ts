import { Command } from './Command'
import { Light } from '../appliances/Light'

export class LightOnCommand implements Command {
    constructor(private light: Light) {}

    execute(): void {
        this.light.on()
    }

    undo(): void {
        this.light.off()
    }
}

export class LightOffCommand implements Command {
    constructor(private light: Light) {}

    execute(): void {
        this.light.off()
    }

    undo(): void {
        this.light.on()
    }
}
