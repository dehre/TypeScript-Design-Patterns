import { Menu } from './models/component/Composite'
import { Waitress } from './models/client/Waitress'
import { MenuItem } from './models/component/Leaf'

const pancakeHouseMenu = new Menu('PANCAKE HOUSE MENU', 'Breakfast')
const dinerMenu = new Menu('DINER MENU', 'Lunch')
const cafeMenu = new Menu('CAFÉ MENU', 'Dinner')
const dessertMenu = new Menu('DESSERT MENU', 'Dessert of course!')

const allMenus = new Menu('ALL MENUS', 'All menus combined')
allMenus.add(pancakeHouseMenu)
allMenus.add(dinerMenu)
allMenus.add(cafeMenu)

dinerMenu.add(new MenuItem('Pasta', 'Spaghetti with Marinara Sauce, and a slice of sourdough bread', true, 3.89))
dinerMenu.add(dessertMenu)
dessertMenu.add(new MenuItem('Apple Pie', 'Apple pie with a flakey crust, topped with vanilla icecream', true, 1.59))

// other menu items here

const waitress = new Waitress(dinerMenu)
waitress.printMenu()
waitress.printVegetarianMenu()
