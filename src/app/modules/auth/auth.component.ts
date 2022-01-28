import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { finalize } from 'rxjs';

import { AuthService } from 'src/app/modules/auth/auth.service';
import { AuthModels } from './models';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  public isLoading: boolean;

  constructor(private readonly authService: AuthService) {}
  
  public readonly form = new FormGroup({
    login: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
    ]),
    password: new FormControl(null, [Validators.required]),
  });

  public get canLogIn(): boolean {
    return this.form.valid && !this.isLoading;
  }

  private get _dto(): AuthModels.User.IUser {
    return this.form.value;
  }

  public logIn() {
    this.isLoading = true;

    this.authService
      .logIn(this._dto)
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe(
        () => {
          console.log('SUCCESSFUL LOGGED IN!');
        },
        (error) => {
          console.error('FAILED LOGGED IN!');

          console.error(error);
        }
      );
  }
}
