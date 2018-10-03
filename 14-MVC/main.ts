import * as uuid from 'uuid'

export interface SequencerInterface {
    start(): void
    stop(): void
    setTempoInBPM(bpm: number): void
}

export interface BeatModelInterface {
    on(): void
    off(): void
    setBPM(bpm: number): void
    getBPM(): number
    registerBeatObserver(o: BeatObserverInterface): void
    removeBeatObserver(o: BeatObserverInterface): void
    notifyBeatObservers(): void
    registerBPMObserver(o: BPMObserverInterface): void
    removeBPMObserver(o: BPMObserverInterface): void
    notifyBPMObservers(): void
}

export class BeatModel implements BeatModelInterface {
    private beatObservers: BeatObserverInterface[] = []
    private BPMObservers: BPMObserverInterface[] = []
    private bpm = 90

    constructor(private sequencer: SequencerInterface) {}

    on(): void {
        this.sequencer.start()
        this.setBPM(90)
    }

    off(): void {
        this.setBPM(0)
        this.sequencer.stop()
    }

    getBPM(): number {
        return this.bpm
    }

    setBPM(bpm: number): void {
        this.bpm = bpm
        this.sequencer.setTempoInBPM(this.bpm)
        this.notifyBPMObservers()
    }

    // called by some Audio class we should extend from
    beatEvent() {
        this.notifyBeatObservers()
    }

    // observer pattern from here
    registerBeatObserver(o: BeatObserverInterface): void {
        this.beatObservers.push(o)
        console.log(`registerBeatObserver: added new observer ${o.id}\n`)
    }
    removeBeatObserver(o: BeatObserverInterface): void {
        this.beatObservers = this.beatObservers.filter(obs => obs.id === o.id)
        console.log(`removeBeatObserver: removed observer ${o.id}\n`)
    }
    registerBPMObserver(o: BPMObserverInterface): void {
        this.BPMObservers.push(o)
        console.log(`registerBPMObserver: added new observer ${o.id}\n`)
    }
    removeBPMObserver(o: BPMObserverInterface): void {
        this.BPMObservers = this.BPMObservers.filter(obs => obs.id === o.id)
        console.log(`removeBPMObserver: removed observer ${o.id}\n`)
    }

    notifyBPMObservers() {
        this.BPMObservers.forEach(o => o.updateBPM())
    }

    notifyBeatObservers() {
        this.beatObservers.forEach(o => o.updateBeat())
    }
}

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
        console.log('creating DJ View..')
    }

    enableStopButton() {
        console.log('stop button enabled')
    }

    disableStopButton() {
        console.log('stop button disabled')
    }

    enableStartButton() {
        console.log('start button enabled')
    }

    disableStartButton() {
        console.log('start button disabled')
    }

    // simulate call from user interacting with UI
    onClick(event: OnClickEvent): void {
        if (event.source === 'setBPMButton') return this.controller.setBPM(event.bpm || 0)
        if (event.source === 'increaseBPMButton') return this.controller.increaseBPM()
        if (event.source === 'decreaseBPMButton') return this.controller.decreaseBPM()
    }

    // observer pattern from here
    updateBPM(): void {
        const bpm = this.model.getBPM()
        if (bpm === 0) return console.log('offline')

        console.log(`Current BPM: ${bpm}`)
    }

    updateBeat(): void {
        console.log('Beat!')
    }
}

export interface ControllerInterface {
    start(): void
    stop(): void
    increaseBPM(): void
    decreaseBPM(): void
    setBPM(bpm: number): void
}

export class BeatController implements ControllerInterface {
    view: DJView // TODO: view interface
    constructor(private model: BeatModelInterface) {
        this.view = new DJView(this.model, this)
    }

    start(): void {
        this.model.on()
        this.view.disableStartButton()
        this.view.enableStopButton()
    }

    stop(): void {
        this.model.off()
        this.view.enableStartButton()
        this.view.disableStopButton()
    }

    increaseBPM(): void {
        const bpm = this.model.getBPM()
        this.model.setBPM(bpm + 1)
    }

    decreaseBPM(): void {
        const bpm = this.model.getBPM()
        this.model.setBPM(bpm - 1)
    }

    setBPM(bpm: number): void {
        this.model.setBPM(bpm)
    }
}
