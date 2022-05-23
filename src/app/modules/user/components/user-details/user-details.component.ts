import {Component, OnInit} from '@angular/core';
import {Location} from "@angular/common";

import {IUser} from "../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  title: string = 'User details';
  user: IUser;


  constructor(private _activatedRoute: ActivatedRoute,
              private _router: Router,
              private _location: Location
  ) {
    this._activatedRoute.params.subscribe(() => {
      const state = this._router.getCurrentNavigation()?.extras?.state?.['userData'] as IUser;
      if (state) {
        this.user = state;
        this.title = ['User', this.user.id, 'details'].join(' ');
      }
    });
  }

  ngOnInit(): void {

  }

  goBack(): void {
    this._location.back();
  }

  goPosts(): void {
    this._router.navigate(['posts'], {queryParams: {userId: this.user.id}});
  }
}
