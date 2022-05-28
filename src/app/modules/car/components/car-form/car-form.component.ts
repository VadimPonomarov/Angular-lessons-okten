import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

import {CarService, CommonDataService} from "../../services";

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.scss']
})
export class CarFormComponent implements OnInit {

  form: FormGroup;
  formTitle: string = 'Автомобиль';

  constructor(private _carService: CarService,
              private _commonDataService: CommonDataService) {
    this._createForm();
  }

  ngOnInit(): void {
    this._commonDataService.currentCar.subscribe(value => this.form.patchValue(value));
  }

  _createForm(): void {
    this.form = new FormGroup({
      id: new FormControl(null),
      model: new FormControl(null),
      price: new FormControl(null),
      year: new FormControl(null),
    });
  }

  handleSubmit(): void {
    if (this.form.controls['id'].value) {
      this._carService.updateById(this.form.controls['id'].value, this.form.getRawValue())
        .subscribe(() => {
          this._commonDataService.refreshCars
            .next(!this._commonDataService.refreshCars);
          this.form.reset();
        });
      return;
    }
    this._carService.createCar(this.form.getRawValue())
      .subscribe(() => {
        this._commonDataService.refreshCars
          .next(!this._commonDataService.refreshCars);
        this.form.reset();
      });
  }

  handleDelete(id: string): void {
    this._carService.deleteById(id).subscribe(() => {
      this._commonDataService.refreshCars
        .next(!this._commonDataService.refreshCars);
      this.form.reset();
    });
  }
}
