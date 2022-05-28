import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {
  AbstractControl, FormControl, FormGroup, ValidationErrors, Validators
} from "@angular/forms";

import {AuthService} from "../../services";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
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
      confirmPassword: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20)
      ])
    }, [this._checkPasswords]);
  }

  register($event: SubmitEvent): void {
    $event.preventDefault();
    const rawValue = this.form.getRawValue();
    delete rawValue.confirmPassword;
    this._authService.register(rawValue).subscribe({
        next: () => {
          this._router.navigate(['login']);
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

  _checkPasswords(form: AbstractControl): ValidationErrors | null {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');
    return password?.value === confirmPassword?.value ? null : {notSame: true};
  }
}
