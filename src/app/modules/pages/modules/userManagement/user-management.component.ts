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

import { User, Companies } from './user-companies';
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
  public filteredUsers: User[] = [];
  public companies: Companies[] = [];

  public timerSub: Subscription;

  public controlName = new FormControl(null, [Validators.required]);

  constructor(private readonly _usersManageService: UserManagementService) {}

  /* TODO: implement method setFilteredUser with params users, companies, filterValue */

  ngOnInit() {
    this.onFilter();

    forkJoin([
      this._usersManageService.getUsers(),
      this._usersManageService.getCompanies(),
    ]).subscribe(([users, companies]) => {
      this.users = users;
      this.companies = companies;
      this.filteredUsers = [...this.users];

      for (const user of this.users) {
        if (!user.experience?.length) {
          user.experienceAsTitle = ['This user has no experience'];

          continue;
        }

        user.experienceAsTitle = [];

        for (const experience of user.experience) {
          let exp = this.companies.find((exp) => exp.id === experience);
          if (exp) {
            user.experienceAsTitle.push(exp.title);
          } else {
            user.experienceAsTitle.push(`Unknown company #${experience}`);
          }
        }
      }
    });
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

        /* TODO: read about array methods () */
        /* TODO: add reset icon */

        this.filteredUsers = [...this.users];
      });
  }

  public launchTimer() {
    let obs$ = interval(1000);

    if (!this.timerActive) {
      this.timer = 0;
      this.timerSub?.unsubscribe();

      return;
    }

    const takeTenSec = obs$.pipe(take(10));
    this.timerSub = takeTenSec.subscribe((d) => {
      this.timer = d;

      console.log('TIMER BODY!');

      if (d === 9) {
        this._usersManageService
          .getUsers()
          .pipe(map((info) => info))
          .subscribe((uData: any) => (this.users = uData));
        /* TODO update filteredUsers */
        this.launchTimer();
      }
    });
  }

  public changeTimerStatus() {
    this.timerActive = !this.timerActive;

    this.launchTimer();
  }
}
