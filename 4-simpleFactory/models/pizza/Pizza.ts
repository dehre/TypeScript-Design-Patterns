export type Pizza = {
    prepare: () => void
    bake: () => void
    cut: () => void
    box: () => void
}

export class CheesePizza implements Pizza {
    prepare(): void {
        console.log('Prepare Cheese Pizza..')
    }
    
    bake(): void {
        console.log('Bake Cheese Pizza..')
    }

    cut(): void {
        console.log('Cut Cheese Pizza..')
    }

    box(): void {
        console.log('Box Cheese Pizza..')
    }
}

export class ClamPizza implements Pizza {
    prepare(): void {
        console.log('Prepare Clam Pizza..')
    }
    
    bake(): void {
        console.log('Bake Clam Pizza..')
    }

    cut(): void {
        console.log('Cut Clam Pizza..')
    }

    box(): void {
        console.log('Box Clam Pizza..')
    }
}