import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {ICar} from "../../../interfaces";


@Injectable({
  providedIn: 'root'
})

export class CommonDataService {
  refreshCars = new BehaviorSubject<boolean>(false);
  currentCar = new BehaviorSubject<ICar>({} as ICar);
}
