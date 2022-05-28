import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from "./components/login/login.component";
import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";
import {RegisterComponent} from "./components/register/register.component";

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: 'cars', pathMatch: 'full'},
      {
        path: 'cars',
        loadChildren: () => import('./modules/car/car.module').then(m => m.CarModule)
      },
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
