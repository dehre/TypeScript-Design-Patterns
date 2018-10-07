export class DvdPlayer {
    movie = ''

    on(): void {
        console.log('Top-O-Line Dvd Player on')
    }

    play(movie: string): void {
        this.movie = movie
        console.log(`Top-O-Line Dvd Player playing ${this.movie}`)
    }

    stop(): void {
        console.log(`Top-O-Line Dvd Player stopped ${this.movie}`)
        this.movie = ''
    }

    eject(): void {
        console.log('Top-O-Line Dvd Player eject')
    }

    off(): void {
        console.log('Top-O-Line Dvd Player off')
    }
}
