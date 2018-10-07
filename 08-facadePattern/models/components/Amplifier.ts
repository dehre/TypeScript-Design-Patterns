import { DvdPlayer } from './DvdPlayer'

export class Amplifier {
    on(): void {
        console.log('Top-O-Line Amplifier on')
    }

    setDvd(_dvd: DvdPlayer): void {
        console.log('Top-O-Line Amplifier setting dvd player')
    }

    setSurroundSound(): void {
        console.log('Top-O-Line Amplifier surround sound on (5 speakers, 1 subwoofer)')
    }

    setVolume(volume: number): void {
        console.log(`Top-O-Line Amplifier setting volume to ${volume}`)
    }

    off(): void {
        console.log('Top-O-Line Amplifier off')
    }
}
