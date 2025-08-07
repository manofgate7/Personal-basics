export enum TemperatureUnit {
      TEMPERATURE_UNIT_UNSPECIFIED,
      CELSIUS, 
      FAHRENHEIT, 
    }
export interface iTemperature {
    unit: TemperatureUnit,
  degrees: number
}