export class Amplifier {
    on(): void {}
}

export class DvdPlayer {}

export class Projector {}

export class TheaterLight {}

export class Screen {}

export class PopcornPopper {}

export class HomeTheaterFacade {
    constructor(
        private amp: Amplifier,
        private dvd: DvdPlayer,
        private projector: Projector,
        private lights: TheaterLight,
        private screen: Screen,
        private popper: PopcornPopper
    ) {}

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
