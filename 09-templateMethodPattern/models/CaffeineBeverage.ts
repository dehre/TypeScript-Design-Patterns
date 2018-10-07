import { promptAsk } from '../../utilities'

export abstract class CaffeineBeverage {
    // Child classes should not be able to overwrite the template method
    // Signature should be more like:
    // -- final prepareRecipe(): void {} --
    async prepareRecipe(): Promise<void> {
        this.boilWater()
        this.brew()
        this.pourInCup()

        // hook
        if (await this.customerWantsCondiments()) {
            this.addCondiments()
        }
    }

    protected abstract brew(): void
    protected abstract addCondiments(): void

    protected boilWater(): void {
        console.log('Boiling water')
    }

    protected pourInCup(): void {
        console.log('Pouring into cup')
    }

    protected async customerWantsCondiments(): Promise<boolean> {
        // A hook is a method that is declared in the abstract class, but only given an empty or default implementation.
        // This gives subclasses the ability to "hook into" the algorithm at various points, if they wish; a subclass is also free to ignore the hook.
        return true
    }
}

export class Tea extends CaffeineBeverage {
    protected brew(): void {
        console.log('Steeping the tea')
    }

    protected addCondiments(): void {
        console.log('Adding Lemon')
    }
}

export class Coffee extends CaffeineBeverage {
    protected brew(): void {
        console.log('Dripping Coffee through filter')
    }

    protected async customerWantsCondiments(): Promise<boolean> {
        const answer = await promptAsk('Would you like milk and sugar in your coffee?')
        if (answer.toLowerCase().startsWith('y')) return true
        return false
    }

    protected addCondiments(): void {
        console.log('Adding Sugar and Milk')
    }
}
