import { WeatherData } from './models/subject/WeatherData'
import { CurrentConditionsDisplay, ForecastDisplay } from './models/observer/Display'
import { getRandomNumberBetween } from '../utilities'

class WeatherStation {
    private weatherData: WeatherData

    constructor() {
        this.weatherData = new WeatherData()
        new CurrentConditionsDisplay(this.weatherData)
        new ForecastDisplay(this.weatherData)
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
            getRandomNumberBetween(-20, 40),
            getRandomNumberBetween(55, 92),
            getRandomNumberBetween(10, 28)
        )
    }
}

const ws = new WeatherStation()
ws.collectData()
