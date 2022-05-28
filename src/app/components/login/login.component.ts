import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services";
import {Router} from "@angular/router";
import {IToken} from "../../interfaces";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  title: string = 'Login';
  form: FormGroup;
  registerFeedback: string | null;

  constructor(private _authService: AuthService, private _router: Router) {
    this._createForm();
  }


  _createForm(): void {
    this.form = new FormGroup({
      username: new FormControl(null,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(20)
        ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20),
      ]),
    });
  }

  login($event: SubmitEvent): void {
    $event.preventDefault();
    const rawValue = this.form.getRawValue();
    this._authService.login(rawValue).subscribe({
        next: (res: IToken) => {

          this._authService.saveTokens(res);
          this._router.navigate(['cars']);
        },

        error: e => {
          this.registerFeedback = e.error;
          setTimeout(() => {
            this.registerFeedback = null;
          }, 5000);
        }
      }
    );
  }
}

