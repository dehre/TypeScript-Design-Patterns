import { Coffee } from './models/CaffeineBeverage'

;(async () => {
    const coffee = new Coffee()
    await coffee.prepareRecipe()
})()
