import { BeatObserverInterface, BPMObserverInterface } from '../view/DJView'

export interface SequencerInterface {
    start(): void
    stop(): void
    setTempoInBPM(bpm: number): void
}

export class Sequencer implements SequencerInterface {
    start(): void {
        console.log('Sequencer > start()')
    }
    stop(): void {
        console.log('Sequencer > stop()')
    }
    setTempoInBPM(bpm: number): void {
        console.log(`Sequencer > setTempoInBPM(${bpm})`)
    }
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
        console.log('MODEL > on()')
        this.sequencer.start()
        this.setBPM(90)
    }

    off(): void {
        console.log('MODEL > off()')
        this.setBPM(0)
        this.sequencer.stop()
    }

    // called by some Audio class we should ideally extend from
    beatEvent() {
        this.notifyBeatObservers()
    }

    getBPM(): number {
        return this.bpm
    }

    setBPM(bpm: number): void {
        console.log(`MODEL > setBPM(${bpm})`)
        this.bpm = bpm
        this.sequencer.setTempoInBPM(this.bpm)
        this.notifyBPMObservers()
    }

    // observer pattern from here
    registerBeatObserver(o: BeatObserverInterface): void {
        this.beatObservers.push(o)
        console.log(`MODEL > registerBeatObserver(${o.id})\n`)
    }
    removeBeatObserver(o: BeatObserverInterface): void {
        this.beatObservers = this.beatObservers.filter(obs => obs.id === o.id)
        console.log(`MODEL > removeBeatObserver(${o.id})\n`)
    }
    registerBPMObserver(o: BPMObserverInterface): void {
        this.BPMObservers.push(o)
        console.log(`MODEL > registerBPMObserver(${o.id})\n`)
    }
    removeBPMObserver(o: BPMObserverInterface): void {
        this.BPMObservers = this.BPMObservers.filter(obs => obs.id === o.id)
        console.log(`MODEL > registerBPMObserver(${o.id})\n`)
    }

    notifyBeatObservers() {
        console.log('MODEL > notifyBeatObservers()')
        this.beatObservers.forEach(o => o.updateBeat())
    }

    notifyBPMObservers() {
        console.log('MODEL > notifyBPMObservers()')
        this.BPMObservers.forEach(o => o.updateBPM())
    }
}
