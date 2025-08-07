import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyHealthComponent } from './my-health/my-health.component';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [
  {
    path: 'health',
    component: MyHealthComponent,
  },
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'weather',
    component: WeatherComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
