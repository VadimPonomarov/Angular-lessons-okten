import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CarRoutingModule} from './car-routing.module';
import {CarsComponent} from './components/cars/cars.component';
import {CarFormComponent} from './components/car-form/car-form.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {CarInterceptor} from "./interseptors";
import {CarResolver} from "./resolvers";
import {CarService, CommonDataService} from "./services";


@NgModule({
  declarations: [
    CarsComponent,
    CarFormComponent
  ],
  imports: [
    CommonModule,
    CarRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [CarService, CarResolver, CommonDataService,
    {provide: HTTP_INTERCEPTORS, useClass: CarInterceptor, multi: true}
  ]
})
export class CarModule {
}
