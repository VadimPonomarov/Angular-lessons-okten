import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {ICar} from "../../../interfaces";
import {urls} from "../../../constants";

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private _httpClient: HttpClient) {
  }

  createCar(car: ICar): Observable<ICar> {
    return this._httpClient.post<ICar>(urls.cars, car);
  }

  getAll(): Observable<ICar[]> {
    return this._httpClient.get<ICar[]>(urls.cars);
  }

  getById(id: string): Observable<ICar> {
    return this._httpClient.get<ICar>(`${urls.cars}/${id}`);
  }

  deleteById(id: string): Observable<void> {
    return this._httpClient.delete<void>(`${urls.cars}/${id}`);
  }

  updateById(id: string, carForUpdate: Partial<ICar>): Observable<ICar> {
    return this._httpClient.patch<ICar>(`${urls.cars}/${id}`, carForUpdate);
  }

}
