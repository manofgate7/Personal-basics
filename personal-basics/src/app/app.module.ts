import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyHealthComponent } from './my-health/my-health.component';
import { BmiCalcComponent } from './bmi-calc/bmi-calc.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProteinCalcComponent } from './protein-calc/protein-calc.component';
import { WeatherComponent } from './weather/weather.component';
import { WeatherImagePipe } from './weather-image.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MyHealthComponent,
    BmiCalcComponent,
    ProteinCalcComponent,
    WeatherComponent,
    WeatherImagePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
