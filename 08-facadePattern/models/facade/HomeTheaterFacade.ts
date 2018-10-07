import { Amplifier, DvdPlayer, Projector, TheaterLight, TheaterScreen, PopcornPopper } from '../components'

export type HomeTheaterFacadeProps = {
    amp: Amplifier
    dvd: DvdPlayer
    projector: Projector
    lights: TheaterLight
    screen: TheaterScreen
    popper: PopcornPopper
}

export class HomeTheaterFacade {
    private amp: Amplifier
    private dvd: DvdPlayer
    private projector: Projector
    private lights: TheaterLight
    private screen: TheaterScreen
    private popper: PopcornPopper

    constructor({ amp, dvd, projector, lights, screen, popper }: HomeTheaterFacadeProps) {
        this.amp = amp
        this.dvd = dvd
        this.projector = projector
        this.lights = lights
        this.screen = screen
        this.popper = popper
    }

    watchMovie(movie: string): void {
        console.log('Get ready to watch a movie..')
        this.popper.on()
        this.popper.pop()
        this.lights.dim(10)
        this.screen.down()
        this.projector.on()
        this.projector.wideScreenMode()
        this.amp.on()
        this.amp.setDvd(this.dvd)
        this.amp.setSurroundSound()
        this.amp.setVolume(5)
        this.dvd.on()
        this.dvd.play(movie)
    }

    endMovie(): void {
        console.log('Shuttin movie theather down..')
        this.popper.off()
        this.lights.on()
        this.screen.up()
        this.projector.off()
        this.amp.off()
        this.dvd.stop()
        this.dvd.eject()
        this.dvd.off()
    }
}
