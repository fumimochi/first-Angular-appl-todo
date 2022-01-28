import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {
  debounceTime,
  forkJoin,
  interval,
  map,
  Subscription,
  take,
} from 'rxjs';

import { PagesModels } from '../../models';
import { UserManagementService } from './user-management.service';

@Component({
  selector: 'app-userManagement',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss'],
})
export class UserManagementComponent implements OnInit {
  public timer: number = 0;
  public timerActive: boolean = false;
  public users: PagesModels.User.IUser[] = [];
  public filteredUsers: PagesModels.User.IUser[] = [];
  public companies: PagesModels.Companies.ICompanies[] = [];
  public timerSub: Subscription;
  public controlName = new FormControl(null, [Validators.required]);

  constructor(private readonly _usersManageService: UserManagementService) {}


  ngOnInit() {
    this.onFilter();

    forkJoin([
      this._usersManageService.getUsers(),
      this._usersManageService.getCompanies(),
    ]).subscribe(([users, companies]) => {
      this.users = users;
      this.companies = companies;
      this.filteredUsers = [...this.users];
      this.setFilteredUser(this.users, this.companies);
    });
  }

  public setFilteredUser(users, companies) {
    for (const user of users) {
      if (!user.experience?.length) {
        user.experienceAsTitle = ['This user has no experience'];
        continue;
      }
      user.experienceAsTitle = [];
      for (const experience of user.experience) {
        let exp = companies.find((exp) => exp.id === experience);
        if (exp) {
          user.experienceAsTitle.push(exp.title);
        } else {
          user.experienceAsTitle.push(`Unknown company #${experience}`);
        }
      }
    } 
  }

  public onFilter() {
    this.controlName.valueChanges
      .pipe(debounceTime(1_000))
      .subscribe((val: string) => {
        if (val) {
          this.filteredUsers = [];
          this.users.forEach((user) => {
            if (user.name.toLowerCase().startsWith(val.toLowerCase())) {
              this.filteredUsers.push(user);
            }
          });
          return;
        }
        this.filteredUsers = [...this.users];
      });
  }

  public resetValue() {
    this.controlName.patchValue('');
    this.filteredUsers = [...this.users];
  }

  public launchTimer() {
    let obs$ = interval(1000);

    if (!this.timerActive) {
      this.timer = 0;
      this.timerSub?.unsubscribe();
      return;
    }
    const takeTenSec = obs$.pipe(take(10));
    this.timerSub = takeTenSec.subscribe((sec) => {
      this.timer = sec;
      console.log('TIMER BODY!');
      if (sec === 9) {
        this._usersManageService
          .getUsers()
          .pipe(map((info) => info))
          .subscribe((uData: any) => {
            (this.users = uData)
            this.setFilteredUser(this.users, this.companies);
            this.filteredUsers = [...this.users];
          });
        this.launchTimer();
      }
      this.onFilter(); 
    });
  }

  public changeTimerStatus() {
    this.timerActive = !this.timerActive;

    this.launchTimer();
  }
}
