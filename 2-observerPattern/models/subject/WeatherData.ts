import { ObserverInterface } from '../observer/Display'

export interface SubjectInterface {
    registerObserver(o: ObserverInterface): void
    removeObserver(o: ObserverInterface): void
    notifyObservers(): void
}

// specific for this implementation
export interface WeatherDataInterface {
    setMeasurements(temperature: number, humidity: number, pressure: number): void
}

export class WeatherData implements SubjectInterface, WeatherDataInterface {
    observers: ObserverInterface[]
    temperature: number
    humidity: number
    pressure: number

    constructor() {
        this.observers = []
    }

    registerObserver(o: ObserverInterface): void {
        this.observers.push(o)
        console.log(`registerObserver: added new observer ${o.id}\n`)
    }

    removeObserver(o: ObserverInterface): void {
        this.observers = this.observers.filter(obs => obs.id === o.id)
        console.log(`removeObserver: removed observer ${o.id}\n`)
    }

    notifyObservers(): void {
        const obsList: string[] = []
        this.observers.forEach(obs => {
            obs.update(this.temperature, this.humidity, this.pressure)
            obsList.push(obs.id)
        })
        console.log(`notifyObservers: notified ${obsList.join(', ')}\n`)
    }

    setMeasurements(temperature: number, humidity: number, pressure: number): void {
        this.temperature = temperature
        this.humidity = humidity
        this.pressure = pressure
        this.notifyObservers()
    }
}
