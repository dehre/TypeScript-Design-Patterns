import { PizzaStore, NYPizzaStore, ChicagoPizzaStore } from './models/factories/factoryMethod/PizzaStore'

export class PizzaTestDrive {
    start(): void {
        const nyStore: PizzaStore = new NYPizzaStore()
        const chicagoStore: PizzaStore = new ChicagoPizzaStore()

        const ethanPizza = nyStore.orderPizza('cheese')
        console.log(`Ethan ordered a ${ethanPizza.getName()}\n`)

        const joelPizza = chicagoStore.orderPizza('cheese')
        console.log(`Joel ordered a ${joelPizza.getName()}\n`)
    }
}

new PizzaTestDrive().start()