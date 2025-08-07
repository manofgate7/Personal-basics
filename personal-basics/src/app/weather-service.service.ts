import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { iweatherResponse } from './Interfaces/iweatherResponse';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {
  keyURL = "key=KEYAPI";
  weatherBaseURL:string="https://weather.googleapis.com/v1/forecast/days:lookup?" + this.keyURL + "&unitsSystem=IMPERIAL&";
  geoCodeBaseURL:string="https://maps.googleapis.com/maps/api/geocode/json?"+this.keyURL+"&address=";

  constructor(private http: HttpClient) { }

  getLocation(city:string, state:string): Observable<any> {
      return this.http.get(this.geoCodeBaseURL+city+",+"+state);
  }

  getWeatherLocation(lat:number, lng:number): Observable<any> {
    const params:string = "location.latitude="+ lat + "&location.longitude=" + lng;
    return this.http.get(this.weatherBaseURL+params);
  }

  handleWeatherReturn(data:any): iweatherResponse {
    const weatherResponse = data as iweatherResponse;
    console.log(weatherResponse);
    return weatherResponse;
  }

  handleGetLocation(data: any): [number, number] {
      let lat = data.results[0].geometry.location.lat;
      let lng = data.results[0].geometry.location.lng;
      console.log("lat: " + lat + " ; lng: " + lng);
      return [lat, lng];
  }

}
