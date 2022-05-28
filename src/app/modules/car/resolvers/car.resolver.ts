import {Injectable} from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable} from 'rxjs';
import {ICar} from "../../../interfaces";
import {CarService} from "../services";

@Injectable({
  providedIn: 'root'
})
export class CarResolver implements Resolve<Observable<ICar[]>> {

  constructor(private _carService: CarService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ICar[]> {
    return this._carService.getAll();
  }
}
