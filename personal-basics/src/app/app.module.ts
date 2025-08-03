import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyHealthComponent } from './my-health/my-health.component';
import { BmiCalcComponent } from './bmi-calc/bmi-calc.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProteinCalcComponent } from './protein-calc/protein-calc.component';

@NgModule({
  declarations: [
    AppComponent,
    MyHealthComponent,
    BmiCalcComponent,
    ProteinCalcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
