import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/modules/auth/modules/register/register.service';
import { PagesModels } from '../../models';
import { AddUserService } from './add-user.service';

@Component({
  selector: 'app-register',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {
  public isAdded: boolean = false;
  public experiences: Array<string> = [];
  public companies: PagesModels.Companies.ICompanies[] = [];

  constructor(private readonly _addService: AddUserService) {  }

  public readonly form = new FormGroup({
    name: new FormControl(
      '', 
      [Validators.required, Validators.minLength(4)]
    ),
    age: new FormControl(
      '', 
      Validators.required // custom validator just for numbers
    ),
    sex: new FormControl(
      'male',
      Validators.required
    ),
    experience: new FormControl(
      '',
    )
  });

  ngOnInit() {
      this._addService.getCompanies()
        .subscribe((company) => {
          this.companies = company.sort((cur, next) => cur.id > next.id ? 1 : -1);
          // (cur, next) => cur.id > next.id ? 1 : -1  to sort method ebove
          this.companies.forEach(comp => {
            this.experiences.push(comp.title)
          })
        });
      
      
  }

  public submitNewUser() {
    this._addService.addUser(this.form.value)
      .subscribe((json) => {
        console.log(json)
      });
    this.isAdded = true;
  }
}
