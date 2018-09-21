import { GumBallMachine } from '../context/GumBallMachine'
import { getRandomNumberBetween } from '../../utilities'

export interface State {
    insertQuarter(): void
    ejectQuarter(): void
    turnCrank(): void
    dispense(): void
}

export class SoldOutState implements State {
    constructor(private gumBallMachine: GumBallMachine) {}

    insertQuarter(): void {
        console.log(`you can't insert a quarter, the machine is sold out`)
    }

    ejectQuarter(): void {
        console.log(`you can't eject, you haven't inserted a quarter yet`)
    }

    turnCrank(): void {
        console.log(`you turned, but there are no gumballs`)
    }

    dispense(): void {
        console.log(`no gumball dispensed`)
    }
}

export class NoQuarterState implements State {
    constructor(private gumBallMachine: GumBallMachine) {}

    insertQuarter(): void {
        console.log(`you inserted a quarter`)
        this.gumBallMachine.setState(this.gumBallMachine.hasQuarterState)
    }

    ejectQuarter(): void {
        console.log(`you haven't inserted a quarter`)
    }

    turnCrank(): void {
        console.log(`you turned, but there's no quarter`)
    }

    dispense(): void {
        console.log(`you need to pay first`)
    }
}

export class HasQuarterState implements State {
    constructor(private gumBallMachine: GumBallMachine) {}

    insertQuarter(): void {
        console.log(`you can't insert another quarter`)
    }

    ejectQuarter(): void {
        console.log(`quarter returned`)
        this.gumBallMachine.setState(this.gumBallMachine.noQuarterState)
    }

    turnCrank(): void {
        console.log(`you turned...`)
        const isWinner = getRandomNumberBetween(1, 4) === 1
        if (isWinner && this.gumBallMachine.count > 0) {
            this.gumBallMachine.setState(this.gumBallMachine.winnerState)
        } else {
            this.gumBallMachine.setState(this.gumBallMachine.soldState)
        }
    }

    dispense(): void {
        console.log(`no gumball dispensed`)
    }
}

export class SoldState implements State {
    constructor(private gumBallMachine: GumBallMachine) {}

    insertQuarter(): void {
        console.log(`please wait, we're already giving you a gumball`)
    }

    ejectQuarter(): void {
        console.log(`sorry, you already turned the crank`)
    }

    turnCrank(): void {
        console.log(`turning twice doesn't get you another gumball!`)
    }

    dispense(): void {
        this.gumBallMachine.releaseBall()
        if (this.gumBallMachine.count > 0) {
            this.gumBallMachine.setState(this.gumBallMachine.noQuarterState)
        } else {
            console.log('oops, out of gumballs!')
            this.gumBallMachine.setState(this.gumBallMachine.soldOutState)
        }
    }
}

export class WinnerState implements State {
    constructor(private gumBallMachine: GumBallMachine) {}

    insertQuarter(): void {
        console.log(`please wait, we're already giving you a gumball`)
    }

    ejectQuarter(): void {
        console.log(`sorry, you already turned the crank`)
    }

    turnCrank(): void {
        console.log(`turning twice doesn't get you another gumball!`)
    }

    dispense(): void {
        this.gumBallMachine.releaseBall()
        if (this.gumBallMachine.count === 0) {
            this.gumBallMachine.setState(this.gumBallMachine.soldOutState)
            return
        }

        this.gumBallMachine.releaseBall()
        console.log(`YOU'RE A WINNER! You got two gumballs for your quarter`)
        if (this.gumBallMachine.count > 0) {
            this.gumBallMachine.setState(this.gumBallMachine.noQuarterState)
        } else {
            console.log('oops, out of gumballs!')
            this.gumBallMachine.setState(this.gumBallMachine.soldOutState)
        }
    }
}
