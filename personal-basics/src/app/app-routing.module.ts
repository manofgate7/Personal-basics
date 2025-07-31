import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyHealthComponent } from './my-health/my-health.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'health',
    component: MyHealthComponent,
  },
  {
    path: '',
    component: AppComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
