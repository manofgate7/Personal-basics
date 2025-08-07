import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WeatherServiceService } from '../weather-service.service';
import { iweatherResponse } from '../Interfaces/iweatherResponse';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  isError: boolean = false;
  isLoading: boolean = false;
  displayWeather: boolean = false;
  weather: iweatherResponse | undefined;

  weatherForm: FormGroup = this.fb.group({
          city: ['', [Validators.required]],
          state: ['', Validators.required],
        });
  constructor(private fb: FormBuilder, private ws: WeatherServiceService) { }

  ngOnInit(): void {
  }

  GetWeather(): void {
    this.isLoading = true;
    const city: string = this.weatherForm.get("city")?.value;
    const state: string = this.weatherForm.get("state")?.value;
    this.ws.getLocation(city, state).subscribe(
        {
          error: e => console.error('Error fetching data:', e),
          next: data => {
           let loc = this.ws.handleGetLocation(data);
           this.ws.getWeatherLocation(loc[0], loc[1]).subscribe({
              error:  e => console.error('Error fetching data:', e),
              next: data =>  {
                this.weather = this.ws.handleWeatherReturn(data);
                this.isLoading = false;
                this.displayWeather = true;
              }
            });
          }
        });

    
  }

}
