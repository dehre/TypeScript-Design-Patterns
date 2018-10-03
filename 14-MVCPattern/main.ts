import { Sequencer, BeatModel } from './models/model/BeatModel'
import { BeatController } from './models/controller/BeatController'

const model = new BeatModel(new Sequencer())
const controller = new BeatController(model)

console.log('\n\n---- START CONTROLLER ----')
controller.start()

// simulate UI interaction
console.log('\n\n---- INCREASE BPM ----')
controller.view.onClick({ source: 'increaseBPMButton' })
