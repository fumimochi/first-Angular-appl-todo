import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { delay, map, Observable } from "rxjs";

import { PagesModels } from "../../models";

@Injectable({
    providedIn: 'root',
})
export class UserManagementService {
    private readonly _baseUsersApiRoute = `http://localhost:3000/users`;
    private readonly _baseCompaniesApiRoute = 'http://localhost:3000/companies';

    constructor(private readonly http: HttpClient) { }

    public getUsers(): Observable<PagesModels.User.IUser[]> {
        return this.http.get<PagesModels.User.IUser[]>(this._baseUsersApiRoute);
    }

    public getUserByName(name: string) {
        return this.http.get(this._baseUsersApiRoute+`?name=${name}`)
            .pipe(
                delay( 1000 )  
            )
    }

    public getCompanies() {
        return this.http.get<PagesModels.Companies.ICompanies[]>(this._baseCompaniesApiRoute);
    }

    public timerRefresh() {
        return this.http.get(this._baseUsersApiRoute)
        .pipe(
            // dela( 10000 )
        )
    }

    public deleteUser(user: any) {
        return this.http.delete(`${this._baseUsersApiRoute}/${user.id}`)
    }
}