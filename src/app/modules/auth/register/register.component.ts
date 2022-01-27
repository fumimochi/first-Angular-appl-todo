import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public experiences: Array<string> = [];

  // constructor(private readonly _registerService) {  }

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
      
  }

  public submitNewUser() {
    console.log('submited');
  }

}
