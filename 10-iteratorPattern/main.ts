import { PancakeHouseMenu, DinerMenu } from './models/aggregators/Menu'
import { Waitress } from './models/client/Waitress'

const pancakeMenu = new PancakeHouseMenu()
const dinerMenu = new DinerMenu()
const waitress = new Waitress([pancakeMenu, dinerMenu])

waitress.printMenu()
