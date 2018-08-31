import { Light } from '../appliances/Light'
import { Stereo } from '../appliances/Stereo'

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

export class NoCommand implements Command {
    execute(): void {}
    undo(): void {}
}
