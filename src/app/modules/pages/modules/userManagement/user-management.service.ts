import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { delay, interval, Observable, timeout } from "rxjs";
import { Companies, User } from "./user-companies";

@Injectable({
    providedIn: 'root',
})
export class UserManagementService {
    private readonly _baseUsersApiRoute = `http://localhost:3000/users`;
    private readonly _baseCompaniesApiRoute = 'http://localhost:3000/companies';

    constructor(private readonly http: HttpClient) { }

    public getUsers(): Observable<User[]> {
        return this.http.get<User[]>(this._baseUsersApiRoute);
    }

    public getUserByName(name: string) {
        return this.http.get(this._baseUsersApiRoute+`?name=${name}`)
            .pipe(
                delay( 1000 )  
            )
    }

    public getCompanies() {
        return this.http.get<Companies[]>(this._baseCompaniesApiRoute);
    }

    timerRefresh() {
        return this.http.get(this._baseUsersApiRoute)
        .pipe(
            // dela( 10000 )
        )
    }
}