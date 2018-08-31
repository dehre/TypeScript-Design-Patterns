import { Light, Stereo, CeilingFan } from './models/appliances'
import {
    LightOnCommand,
    LightOffCommand,
    StereoOnWithCDCommand,
    StereoOffWithCDCommand,
    CeilingFanHighCommand,
    CeilingFanMediumCommand,
    CeilingFanOffCommand,
    CeilingFanLowCommand
} from './models/commands'
import { RemoteControl } from './models/invoker/RemoteControl'

const remoteControl = new RemoteControl()

const livingRoomLight = new Light()
const stereo = new Stereo()
const fan = new CeilingFan('living room')

const lightOnCommand = new LightOnCommand(livingRoomLight)
const lightOffCommand = new LightOffCommand(livingRoomLight)
const stereoOnCommand = new StereoOnWithCDCommand(stereo)
const stereoOffCommand = new StereoOffWithCDCommand(stereo)
const fanHighCommand = new CeilingFanHighCommand(fan)
const fanMediumCommand = new CeilingFanMediumCommand(fan)
const fanLowCommand = new CeilingFanLowCommand(fan)
const fanOffCommand = new CeilingFanOffCommand(fan)

remoteControl.setCommand(0, lightOnCommand, lightOffCommand)
remoteControl.setCommand(1, stereoOnCommand, stereoOffCommand)
remoteControl.setCommand(2, fanHighCommand, fanMediumCommand)
remoteControl.setCommand(3, fanLowCommand, fanOffCommand)

console.log(remoteControl.toString())

remoteControl.onButtonWasPressed(0)
remoteControl.onButtonWasPressed(2)
remoteControl.undoButtonWasPressed()
