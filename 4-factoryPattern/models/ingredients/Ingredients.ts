export type Dough = {}

export class ThinCrustDough implements Dough {
    constructor(){
        console.log('Thin Crust Dough created')
    }
}

export class ExtraThickCrustDough implements Dough {
    constructor(){
        console.log('Extra Thick Crust Dough created')
    }
}

export type Sauce = {}

export class MarinaraSouce implements Sauce {
    constructor(){
        console.log('Marinara Souce created')
    }
}

export class TomatoSouce implements Sauce {
    constructor(){
        console.log('Tomato Souce created')
    }
}

export type Topping = {}

export class Garlic implements Topping {
    constructor(){
        console.log('Garlic created')
    }
}

export class Onion implements Topping {
    constructor(){
        console.log('Onion created')
    }
}

export class Mozzarella implements Topping {
    constructor(){
        console.log('Mozzarella created')
    }
}

export class Reggiano implements Topping {
    constructor(){
        console.log('Reggiano created')
    }
}