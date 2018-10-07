import { Command } from './Command'
import { Stereo } from '../appliances/Stereo'

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
