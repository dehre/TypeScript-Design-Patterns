import { Light } from '../appliances/Light'
import { Stereo } from '../appliances/Stereo'
import { CeilingFan } from '../appliances/CeilingFan'

export interface Command {
    execute(): void
    undo(): void
}

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

export class StereoOnWithCDCommand implements Command {
    constructor(private stereo: Stereo) {}

    execute(): void {
        this.stereo.on()
        this.stereo.setCD()
        this.stereo.setVolume(11)
    }

    undo(): void {
        this.stereo.removeCD()
        this.stereo.off()
    }
}

export class StereoOffWithCDCommand implements Command {
    constructor(private stereo: Stereo) {}

    execute(): void {
        this.stereo.removeCD()
        this.stereo.off()
    }

    undo(): void {
        this.stereo.on()
        this.stereo.setCD()
        this.stereo.setVolume(11)
    }
}

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

export class NoCommand implements Command {
    execute(): void {}
    undo(): void {}
}
