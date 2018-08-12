import { WeatherData } from './models/subject/WeatherData'
import { CurrentConditionsDisplay, ForecastDisplay, StatisticsDisplay } from './models/observer/Display'

class WeatherStation {
    private weatherData: WeatherData

    constructor() {
        this.weatherData = new WeatherData()
        new CurrentConditionsDisplay(this.weatherData)
        new ForecastDisplay(this.weatherData)
        new StatisticsDisplay(this.weatherData)
    }

    collectData(): void {
        const loop = () => {
            this.setRandomMeasurements()
            const rand = Math.round(Math.random() * (3000 - 500)) + 500 // new time between .5s and 3s
            setTimeout(loop, rand)
        }
        loop()
    }

    private setRandomMeasurements(): void {
        this.weatherData.setMeasurements(
            this.getRandomNumberBetween(-20, 40),
            this.getRandomNumberBetween(55, 92),
            this.getRandomNumberBetween(10, 28)
        )
    }

    private getRandomNumberBetween(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
}

const ws = new WeatherStation()
ws.collectData()
