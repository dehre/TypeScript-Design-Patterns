import { GumBallMachine } from './context/GumBallMachine'

const gumBallMachine = new GumBallMachine(10)
for (let i = 0; i < 5; i++) {
    gumBallMachine.insertQuarter()
    gumBallMachine.turnCrank()
}
