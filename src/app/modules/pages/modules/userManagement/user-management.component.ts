import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime, forkJoin, interval, map, take, takeUntil, timeout } from 'rxjs';

import { User, Companies } from './user-companies';
import { UserManagementService } from './user-management.service';


@Component({
  selector: 'app-userManagement',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {
  timer: number = 0;
  timerActive: boolean = false;
  users: User[] = [];
  filteredUsers: User[] = [];
  companies: Companies[] = [];

  public readonly form = new FormGroup({
    findName: new FormControl(null, [
      Validators.required,
      Validators.minLength(4)
    ])
  })

  constructor(
    private readonly _usersManageService: UserManagementService
  ) { }

  ngOnInit() { 
    this.onFilter();

    forkJoin([
      this._usersManageService.getUsers(),
      this._usersManageService.getCompanies()
    ])
      .subscribe(
        ([users, companies]) => {
          this.users = users;
          this.companies = companies;

          this.users.map(i => {
            if(i.experience) {
              i.experience.map(j => {
                let currentVal = j;
                // i.experience.splice(0, 1);
                i.experience.push(this.companies[currentVal-1].title)
                // i.experience.splice(0, 1)  Cannot read properties of undefined
              });
            }
          })
        }
      )  

  }

  public onFilter() {
    this.form.get('findName').valueChanges
      .pipe(debounceTime(1_000))
      .subscribe(val => {
        if(val !== '') {
          this.filteredUsers = [];
          this.users.filter(i => {
            i.name === val ? this.filteredUsers.push(i) :  console.log('User wasn`t found');
          })
        }
        else {
          this.filteredUsers.length = 0;
        }
        console.log(this.filteredUsers)
      }) 

    this.form.reset();
  }

  public ifTimer() {
    let obs$ = interval(1000);
    if(this.timerActive) {
      const takeTenSec = obs$.pipe(take(10));
      takeTenSec.subscribe((d) => {
        this.timer = d;
        if(d === 9) {
          this._usersManageService.getUsers()
          .pipe(map(i => i))
          .subscribe((i: any) => this.users = i);
          this.ifTimer();
        }
      })
    } else {
      this.timer = 0;
      // obs$.pipe(takeUntil(0))
      //obs$ = interval();  не останавливает моментально интервал
    }
  } 

  public changeTimerStatus() {
    this.timerActive = !this.timerActive;
    this.ifTimer();
  }
}
 