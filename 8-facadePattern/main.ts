import { Amplifier, DvdPlayer, Projector, TheaterLight, TheaterScreen, PopcornPopper } from './models/components'
import { HomeTheaterFacade } from './models/facade/HomeTheaterFacade'

const homeTheater = new HomeTheaterFacade({
    amp: new Amplifier(),
    dvd: new DvdPlayer(),
    projector: new Projector(),
    lights: new TheaterLight(),
    screen: new TheaterScreen(),
    popper: new PopcornPopper()
})

homeTheater.watchMovie('Raiders of the Lost Ark')
console.log(`\n\nI'm tired, let's go bed\n\n`)
homeTheater.endMovie()
