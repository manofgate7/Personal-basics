import { iDate } from "./iDate";
import { iTemperature } from "./iTemperature";

export interface iForecastDays {
    displayDate: iDate,
    maxTemperature: iTemperature,
    minTemperature : iTemperature,
    feelsLikeMaxTemperature : iTemperature,
    feelsLikeMinTemperature : iTemperature,
    maxHeatIndex : iTemperature,

}