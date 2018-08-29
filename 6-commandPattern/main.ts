import { Light } from './models/appliances/Light'
import { Stereo } from './models/appliances/Stereo'
import { RemoteControl } from './models/invoker/RemoteControl'
import {
    LightOnCommand,
    LightOffCommand,
    StereoOnWithCDCommand,
    StereoOffWithCDCommand
} from './models/commands/Commands'

const remoteControl = new RemoteControl()

const livingRoomLight = new Light()
const stereo = new Stereo()

const lightOnCommand = new LightOnCommand(livingRoomLight)
const lightOffCommand = new LightOffCommand(livingRoomLight)
const stereoOnCommand = new StereoOnWithCDCommand(stereo)
const stereoOffCommand = new StereoOffWithCDCommand(stereo)

remoteControl.setCommand(0, lightOnCommand, lightOffCommand)
remoteControl.setCommand(1, stereoOnCommand, stereoOffCommand)

console.log(remoteControl.toString())

remoteControl.onButtonWasPressed(0)
remoteControl.offButtonWasPressed(1)
