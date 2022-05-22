import {Component} from '@angular/core';
import {Location} from "@angular/common";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private _location: Location) {
  }

  handleBackClick() {
    this._location.back();
  }
}
