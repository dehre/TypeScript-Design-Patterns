export class Singleton {
    private static uniqueInstance: Singleton
    private constructor(){
        console.log('Singleton.constructor > called')
    }

    static getInstance(): Singleton{
        if(!this.uniqueInstance){
            this.uniqueInstance = new Singleton()}
        
        return this.uniqueInstance
    }
}

const s = Singleton.getInstance()
const t = Singleton.getInstance()
const u = Singleton.getInstance()

console.log(s === t && t === u) // true
