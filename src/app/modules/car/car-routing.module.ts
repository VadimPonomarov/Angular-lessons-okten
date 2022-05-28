import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CarsComponent} from "./components/cars/cars.component";
import {CarResolver} from "./resolvers";

const routes: Routes = [
  {path: '', component: CarsComponent, resolve: {carsData: CarResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarRoutingModule {
}
