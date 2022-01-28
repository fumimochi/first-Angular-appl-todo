import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { PagesModels } from 'src/app/modules/pages/models';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public experiences: Array<string> = [];
  public companies: PagesModels.Companies.ICompanies[] = [];

  constructor(private readonly _registerService: RegisterService) {  }

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
      Validators.required
    )
  });

  ngOnInit() {
      this._registerService.getCompanies()
        .subscribe((company) => {
          this.companies = company;
          this.companies.forEach(comp => {
            this.experiences.push(comp.title)
          })
        });
      
      
  }

  public submitNewUser() {
    this._registerService.addUser(this.form.value)
      .subscribe((json) => {
        console.log(json)
      });
  }

}
