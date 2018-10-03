import { DJView } from '../view/DJView'
import { BeatModelInterface } from '../model/BeatModel'

export interface ControllerInterface {
    start(): void
    stop(): void
    increaseBPM(): void
    decreaseBPM(): void
    setBPM(bpm: number): void
}

export class BeatController implements ControllerInterface {
    view: DJView
    constructor(private model: BeatModelInterface) {
        this.view = new DJView(this.model, this)
    }

    start(): void {
        console.log('CONTROLLER > start()')
        this.model.on()
        this.view.disableStartButton()
        this.view.enableStopButton()
    }

    stop(): void {
        console.log('CONTROLLER > stop()')
        this.model.off()
        this.view.enableStartButton()
        this.view.disableStopButton()
    }

    increaseBPM(): void {
        console.log('CONTROLLER > increaseBPM()')
        const bpm = this.model.getBPM()
        this.model.setBPM(bpm + 1)
    }

    decreaseBPM(): void {
        console.log('CONTROLLER > decreaseBPM()')
        const bpm = this.model.getBPM()
        this.model.setBPM(bpm - 1)
    }

    setBPM(bpm: number): void {
        console.log(`CONTROLLER > setBPM(${bpm})`)
        this.model.setBPM(bpm)
    }
}
