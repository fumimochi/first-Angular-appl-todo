import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map, Observable } from 'rxjs';

export interface IUser {
  readonly login: string;
  readonly password: string;
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private readonly _baseApiRoute = 'http://localhost:3000/signIns';

  constructor(private readonly http: HttpClient) {}

  public getAllUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this._baseApiRoute);
  }

  public getUser(dto: Partial<IUser>): Observable<IUser> {
    let params = new HttpParams();

    for (const key in dto) {
      params = params.append(key, dto[key]);
    }

    return this.http.get<IUser[]>(this._baseApiRoute, { params }).pipe(
      map((users: IUser[]) => {
        if (users?.length) {
          return users[0];
        }

        throw new Error('404 => User not found!');
      })
    );
  }
}
