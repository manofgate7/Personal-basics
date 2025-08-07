import { iForecastDays } from "./iForcastDays";
import { iTimeZone } from "./iTimeZone";

export interface iweatherResponse {
    forecastDays : iForecastDays[],
    timeZone : iTimeZone,
    nextPageToken: string
}