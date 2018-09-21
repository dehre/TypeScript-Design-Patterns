import { SoldOutState, NoQuarterState, HasQuarterState, SoldState, WinnerState, State } from '../state/State'

export class GumBallMachine {
    soldOutState = new SoldOutState(this)
    noQuarterState = new NoQuarterState(this)
    hasQuarterState = new HasQuarterState(this)
    soldState = new SoldState(this)
    winnerState = new WinnerState(this)

    state: State
    count = 0

    constructor(numberGumballs: number) {
        this.count = numberGumballs
        if (this.count > 0) {
            this.state = this.noQuarterState
        } else {
            this.state = this.soldOutState
        }
    }

    setState(state: State): void {
        this.state = state
    }

    insertQuarter(): void {
        this.state.insertQuarter()
    }

    ejectQuarter(): void {
        this.state.ejectQuarter()
    }

    turnCrank(): void {
        this.state.turnCrank()
        this.state.dispense()
    }

    releaseBall(): void {
        console.log('a gumball comes rolling out the slot...')
        if (this.count > 0) {
            this.count -= 1
        }
    }
}
