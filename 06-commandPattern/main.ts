import { Light, Stereo, CeilingFan } from './models/appliances'
import {
    Command,
    LightOnCommand,
    LightOffCommand,
    StereoOnWithCDCommand,
    StereoOffWithCDCommand,
    CeilingFanHighCommand,
    CeilingFanMediumCommand,
    CeilingFanOffCommand,
    CeilingFanLowCommand,
    MacroCommand
} from './models/commands'
import { RemoteControl } from './models/invoker/RemoteControl'

const remoteControl = new RemoteControl()

const livingRoomLight = new Light()
const stereo = new Stereo()
const fan = new CeilingFan('living room')

const lightOn = new LightOnCommand(livingRoomLight)
const lightOff = new LightOffCommand(livingRoomLight)
const stereoOn = new StereoOnWithCDCommand(stereo)
const stereoOff = new StereoOffWithCDCommand(stereo)
const fanHigh = new CeilingFanHighCommand(fan)
const fanMedium = new CeilingFanMediumCommand(fan)
const fanLow = new CeilingFanLowCommand(fan)
const fanOff = new CeilingFanOffCommand(fan)

const partyOn: Command = new MacroCommand([lightOn, stereoOn, fanHigh])
const partyOff: Command = new MacroCommand([lightOff, stereoOff, fanLow])

remoteControl.setCommand(0, lightOn, lightOff)
remoteControl.setCommand(1, stereoOn, stereoOff)
remoteControl.setCommand(2, fanHigh, fanMedium)
remoteControl.setCommand(3, fanLow, fanOff)
remoteControl.setCommand(5, partyOn, partyOff)

console.log(remoteControl.toString())

remoteControl.onButtonWasPressed(0)
remoteControl.onButtonWasPressed(2)
remoteControl.undoButtonWasPressed()

console.log('----- TIME TO PARTY -----')
remoteControl.onButtonWasPressed(5)
console.log('----- NEIGHBOURS ARE COMING -----')
remoteControl.offButtonWasPressed(5)
