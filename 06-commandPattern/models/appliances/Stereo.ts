export class Stereo {
    on(): void {
        console.log('Stereo is on')
    }

    off(): void {
        console.log('Stereo is off')
    }

    setRadio(): void {
        console.log('Radio is on')
    }

    setCD(): void {
        console.log('CD is added')
    }

    removeCD(): void {
        console.log('CD is removed')
    }

    setVolume(volume: number): void {
        console.log(`Volume is ${volume}`)
    }
}
