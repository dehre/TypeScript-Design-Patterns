import { Command } from './Command'
import { CeilingFan } from '../appliances/CeilingFan'

// needs to store its state for the undo command
abstract class CeilingFanCommand implements Command {
    prevSpeed: number
    constructor(protected ceilingFan: CeilingFan) {}

    abstract execute(): void

    undo(): void {
        switch (this.prevSpeed) {
            case CeilingFan.HIGH:
                this.ceilingFan.high()
                break
            case CeilingFan.MEDIUM:
                this.ceilingFan.medium()
                break
            case CeilingFan.LOW:
                this.ceilingFan.low()
                break
            case CeilingFan.OFF:
                this.ceilingFan.off()
        }
    }
}

export class CeilingFanHighCommand extends CeilingFanCommand {
    execute(): void {
        const currentSpeed = this.ceilingFan.getSpeed()
        this.prevSpeed = this.ceilingFan.getSpeed()
        this.ceilingFan.high()
    }
}

export class CeilingFanMediumCommand extends CeilingFanCommand {
    execute(): void {
        this.prevSpeed = this.ceilingFan.getSpeed()
        this.ceilingFan.medium()
    }
}

export class CeilingFanLowCommand extends CeilingFanCommand {
    execute(): void {
        this.prevSpeed = this.ceilingFan.getSpeed()
        this.ceilingFan.low()
    }
}

export class CeilingFanOffCommand extends CeilingFanCommand {
    execute(): void {
        this.prevSpeed = this.ceilingFan.getSpeed()
        this.ceilingFan.off()
    }
}
