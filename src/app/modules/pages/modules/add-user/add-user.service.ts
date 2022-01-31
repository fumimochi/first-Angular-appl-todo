import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";

import { PagesModels } from "../../models";

@Injectable({
    providedIn: 'root',
})
export class AddUserService {
    private readonly _baseCompaniesApiRoute = 'http://localhost:3000/companies';
    private readonly _baseUsersApiRoute = 'http://localhost:3000/users';

    constructor(private readonly http: HttpClient) { }
    
    public getCompanies() {
        return this.http.get<PagesModels.Companies.ICompanies[]>(this._baseCompaniesApiRoute);
    }

    public addUser(datas: PagesModels.User.IUser) {
        return this.http.post(this._baseUsersApiRoute, datas)
            .pipe(map(response => JSON.stringify(response)));
    }
}