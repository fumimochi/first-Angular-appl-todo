import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  debounceTime,
  forkJoin,
  interval,
  map,
  Subscription,
  take,
  takeUntil,
  timeout,
} from 'rxjs';

import { User, Companies } from './user-companies';
import { UserManagementService } from './user-management.service';

@Component({
  selector: 'app-userManagement',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss'],
})
export class UserManagementComponent implements OnInit {
  timer: number = 0;
  timerActive: boolean = false;
  users: User[] = [];
  filteredUsers: User[] = [];
  companies: Companies[] = [];

  timerSub: Subscription;

  public readonly form = new FormGroup({
    findName: new FormControl(null, [
      Validators.required,
      Validators.minLength(4),
    ]),
  });

  constructor(private readonly _usersManageService: UserManagementService) {}

  ngOnInit() {
    this.onFilter();

    forkJoin([
      this._usersManageService.getUsers(),
      this._usersManageService.getCompanies(),
    ]).subscribe(([users, companies]) => {
      this.users = users;
      this.filteredUsers = [...this.users];
      this.companies = companies;

      for (const user of this.users.filter(({ experience }) => !!experience)) {
        for (const experience of user.experience) {
          // let currentVal = experience;
          // i.experience.splice(0, 1);
          /* ABSOLUTELY WRONG */
          // user.experience.push(this.companies[currentVal - 1].title);
          // i.experience.splice(0, 1)  Cannot read properties of undefined
          /* TODO */
          // use findItem and push to experienceAsTitle, before initialize experienceAsTitle= []
        }
      }
    });
  }

  public onFilter() {
    /* TODO   change to formControl, not FormGRoup .... se todos.component as example */
    this.form
      .get('findName')
      .valueChanges.pipe(debounceTime(1_000))
      .subscribe((val) => {
        if (val) {
          this.filteredUsers = [];
          this.users.filter((i) => {
            i.name === val
              ? this.filteredUsers.push(i)
              : console.log('User wasn`t found');
          });

          /* TODO */
          // create filter method that does not depend on caps lock, partial phrase

          return;
        }

        this.filteredUsers = [...this.users];
      });

    this.form.reset();
  }

  public launchTimer() {
    let obs$ = interval(1000);

    if (!this.timerActive) {
      this.timer = 0;

      /* TODO investigate about unsubscribe */

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
          .pipe(map((i) => i))
          .subscribe((i: any) => (this.users = i));
        this.launchTimer();
      }
    });
  }

  public changeTimerStatus() {
    this.timerActive = !this.timerActive;

    this.launchTimer();
  }
}
