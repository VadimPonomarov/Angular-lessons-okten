import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {ICar} from "../../../../interfaces";
import {CarService, CommonDataService} from "../../services";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {
  cars: ICar[];

  constructor(private _activatedRoute: ActivatedRoute,
              private _commonDataService: CommonDataService,
              private _carService: CarService) {
    this._activatedRoute.data.subscribe(({carsData}) => this.cars = carsData);
    this._commonDataService.refreshCars.subscribe(() => this._carService.getAll()
      .subscribe(cars => this.cars = cars));
  }

  ngOnInit(): void {
  }

  refreshCars(): void {
    this._activatedRoute.data.subscribe(({carsData}) => this.cars = carsData);
  }


  handleClick(car: ICar) {
    this._commonDataService.currentCar.next(car);
  }
}
