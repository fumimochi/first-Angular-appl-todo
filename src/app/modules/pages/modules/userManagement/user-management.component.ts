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
  public users: User[] = [];
  public filteredUsers: User[] = [];
  public companies: Companies[] = [];

  public timerSub: Subscription;

  public controlName = new FormControl(null, [
    Validators.required
  ])

  constructor(private readonly _usersManageService: UserManagementService) {}

  ngOnInit() {
    this.onFilter();

    forkJoin([
      this._usersManageService.getUsers(),
      this._usersManageService.getCompanies(),
    ]).subscribe(([users, companies]) => {
      this.users = users;
      this.companies = companies;
      
      this.users.forEach(i => i.experienceAsTitle = []);

      for (const user of this.users.filter(({ experience }) => !!experience)) {
        for (const experience of user.experience) {
          let exp =  this.companies.find(exp => exp.id === experience)
          if(exp) {
            user.experienceAsTitle.push(exp.title);
          }
          else {
            user.experienceAsTitle.push('This user has no experience');
          } 
          // use findItem and push to experienceAsTitle, before initialize experienceAsTitle= []
        }
      }
    });
  }

  public onFilter() {
    this.controlName
      .valueChanges.pipe(debounceTime(1_000))
      .subscribe((val: string) => {
        if (val) {
          this.filteredUsers = [];
          this.users.filter((user) => {
            user.name.toLowerCase().startsWith(val.toLowerCase())
              ? this.filteredUsers.push(user)
              : console.log('User wasn`t found');
          });
          return;
        }

        this.filteredUsers = [...this.users];
      });

    this.controlName.reset();
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
        this.launchTimer();
      }
    });
  }

  public changeTimerStatus() {
    this.timerActive = !this.timerActive;

    this.launchTimer();
  }
}
