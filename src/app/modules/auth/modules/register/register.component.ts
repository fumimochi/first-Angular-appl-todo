import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthModels } from '../../models';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public suchLoginExists: boolean = false;
  public regCreated: boolean = false;
  public regInfo: AuthModels.User.IUser[] = [];

  constructor(private readonly _registerService: RegisterService) {}
  
  public readonly form = new FormGroup({
    login: new FormControl(
      '',
      [Validators.required, Validators.minLength(3)]
    ),
    password: new FormControl(
      '',
      [Validators.required, Validators.minLength(4)]
    ),
  })

  ngOnInit() {
    this._registerService.getReg()
      .subscribe(info => {
        this.regInfo = info;
      })
  }

  public submitRegistrated() {
    let check = this.regInfo.find((login) => login.login === this.form.get('login').value);
    if(!check) {
      this.suchLoginExists = false;
      this._registerService.addRegistration(this.form.value)
        .subscribe();
      this.form.reset();
      this.regCreated = true;
    } else {
      this.suchLoginExists = true;
    }
    
  }



}
