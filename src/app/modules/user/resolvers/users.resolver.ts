import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {Observable} from 'rxjs';

import {IUser} from "../interfaces";
import {UserService} from "../services";

@Injectable({
  providedIn: 'root'
})

export class UsersResolver implements Resolve<Observable<IUser[]>> {
  constructor(private userService: UserService) {
  }

  resolve(): Observable<IUser[]> {
    return this.userService.getAll();
  }
}
