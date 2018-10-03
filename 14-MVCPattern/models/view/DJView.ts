import * as uuid from 'uuid'
import { BeatModelInterface } from '../model/BeatModel'
import { ControllerInterface } from '../controller/BeatController'

export type OnClickEvent = {
    source: 'setBPMButton' | 'increaseBPMButton' | 'decreaseBPMButton'
    bpm?: number
}

export interface BeatObserverInterface {
    id: string
    updateBeat(): void
}

export interface BPMObserverInterface {
    id: string
    updateBPM(): void
}

export class DJView implements BeatObserverInterface, BPMObserverInterface {
    id = uuid()
    constructor(private model: BeatModelInterface, private controller: ControllerInterface) {
        this.createView()
        this.model.registerBeatObserver(this)
        this.model.registerBPMObserver(this)
    }

    private createView(): void {
        console.log('VIEW > createView()')
    }

    enableStartButton() {
        console.log('VIEW > enableStartButton()')
    }

    disableStartButton() {
        console.log('VIEW > disableStartButton()')
    }

    enableStopButton() {
        console.log('VIEW > enableStopButton()')
    }

    disableStopButton() {
        console.log('VIEW > disableStopButton()')
    }

    // simulate call from user interacting with UI
    onClick(event: OnClickEvent): void {
        if (event.source === 'setBPMButton') {
            console.log('VIEW > setBPMButton clicked')
            return this.controller.setBPM(event.bpm || 0)
        }
        if (event.source === 'increaseBPMButton') {
            console.log('VIEW > increaseBPMButton clicked')
            return this.controller.increaseBPM()
        }
        if (event.source === 'decreaseBPMButton') {
            console.log('VIEW > decreaseBPMButton clicked')
            return this.controller.decreaseBPM()
        }
    }

    // observer pattern from here
    updateBPM(): void {
        const bpm = this.model.getBPM()
        if (bpm === 0) return console.log('offline')
        console.log(`VIEW > updateBPM(${bpm})`)
    }

    updateBeat(): void {
        console.log('VIEW > updateBeat()')
    }
}
