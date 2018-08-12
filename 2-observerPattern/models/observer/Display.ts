import { SubjectInterface } from '../subject/WeatherData'
import * as uuid from 'uuid/v4'

export interface ObserverInterface {
    id: string
    update(temperature: number, humidity: number, pressure: number): void
}

// specific for this implementation
export interface DisplayElementInterface {
    display(): void
}

export class CurrentConditionsDisplay implements ObserverInterface, DisplayElementInterface {
    id: string
    private temperature: number
    private humidity: number

    constructor(private weatherData: SubjectInterface) {
        this.id = uuid()
        this.weatherData.registerObserver(this)
    }

    update(temperature: number, humidity: number, _pressure: number): void {
        this.temperature = temperature
        this.humidity = humidity
        this.display()
    }

    display(): void {
        console.log(
            `Current Conditions:\n${this.temperature}°C degrees and ${this.humidity}% humidity
        `
        )
    }
}

export class ForecastDisplay implements ObserverInterface, DisplayElementInterface {
    id: string
    private currentPressure = 29.92
    private lastPressure: number

    constructor(private weatherData: SubjectInterface) {
        this.id = uuid()
        this.weatherData.registerObserver(this)
    }

    update(_temperature: number, _humidity: number, pressure: number): void {
        this.lastPressure = this.currentPressure
        this.currentPressure = pressure
        this.display()
    }

    display(): void {
        console.log('Forecast:')
        if (this.currentPressure > this.lastPressure) {
            console.log('Improving weather on the way!\n')
        } else if (this.currentPressure === this.lastPressure) {
            console.log('More of the same\n')
        } else if (this.currentPressure < this.lastPressure) {
            console.log('Watch out for cooler, rainy weather!\n')
        }
    }
}

export class StatisticsDisplay implements ObserverInterface, DisplayElementInterface {
    id: string
    private minTemp = 18
    private maxTemp = 18
    private sumTemp = 0
    private numReadings = 0

    constructor(private weatherData: SubjectInterface) {
        this.id = uuid()
        this.weatherData.registerObserver(this)
    }

    update(temperature: number, _humidity: number, _pressure: number): void {
        this.sumTemp += temperature
        this.numReadings = this.numReadings + 1

        if (temperature < this.minTemp) this.minTemp = temperature
        if (temperature > this.maxTemp) this.maxTemp = temperature
        this.display()
    }

    display(): void {
        console.log(
            `Avg/Max/Min temperature:\n${this.sumTemp / this.numReadings} / ${this.maxTemp} / ${this.minTemp}
        `
        )
    }
}
